import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import type { APIRoute } from 'astro';
import config from '../../../../keystatic.config';

export const prerender = false;

export const ALL: APIRoute = async (context) => {
    try {
        if (typeof process !== 'undefined' && typeof (process as any).loadEnvFile === 'function') {
            (process as any).loadEnvFile();
        }
    } catch {}

    let cfEnv: any = {};
    try {
        cfEnv = (context.locals as any)?.runtime?.env || {};
    } catch {}

    const isGitHubStorage = config.storage?.kind === 'github';

    const envObj = typeof process !== 'undefined' ? process.env : {};
    const clientId = cfEnv.KEYSTATIC_GITHUB_CLIENT_ID || envObj['KEYSTATIC_GITHUB_CLIENT_ID'] || import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID;
    const clientSecret = cfEnv.KEYSTATIC_GITHUB_CLIENT_SECRET || envObj['KEYSTATIC_GITHUB_CLIENT_SECRET'] || import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
    const secret = cfEnv.KEYSTATIC_SECRET || envObj['KEYSTATIC_SECRET'] || import.meta.env.KEYSTATIC_SECRET;

    if (isGitHubStorage && (!clientId || !clientSecret || !secret || secret.length < 32)) {
        return new Response(JSON.stringify({
            error: secret && secret.length < 32
                ? `KEYSTATIC_SECRET must be at least 32 characters long (current length: ${secret ? secret.length : 0})`
                : 'Keystatic environment variables missing in runtime environment',
            hasClientId: Boolean(clientId),
            hasClientSecret: Boolean(clientSecret),
            hasSecret: Boolean(secret),
            secretLength: secret ? secret.length : 0,
            instruction: 'Set KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, and KEYSTATIC_SECRET in Cloudflare environment variables or local .env file.'
        }, null, 2), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const handler = makeGenericAPIRouteHandler({
        config,
        clientId: clientId || 'dummy-client-id',
        clientSecret: clientSecret || 'dummy-client-secret',
        secret: secret || 'dummy-secret-32-chars-minimum-length!!',
    }, {
        slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'
    });

    const originalFetch = globalThis.fetch;
    let result: { body: any; headers?: any; status?: number };
    try {
        globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
            const urlString = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
            const res = await originalFetch(input, init);
            if (urlString.includes('github.com/login/oauth/access_token')) {
                const clone = res.clone();
                try {
                    const data: any = await clone.json();
                    if (data && data.access_token && (!data.refresh_token || !data.expires_in)) {
                        data.refresh_token = data.refresh_token || 'ghr_dummy_token';
                        data.expires_in = data.expires_in || 28800;
                        data.refresh_token_expires_in = data.refresh_token_expires_in || 157680000;
                        data.scope = data.scope || 'public_repo,repo';
                        data.token_type = data.token_type || 'bearer';
                        return new Response(JSON.stringify(data), {
                            status: res.status,
                            statusText: res.statusText,
                            headers: res.headers
                        });
                    }
                } catch {}
            }
            return res;
        };
        result = await handler(context.request);
    } finally {
        globalThis.fetch = originalFetch;
    }

    const { body, headers, status } = result;

    let headersInADifferentStructure = new Map<string, string[]>();
    if (headers) {
        if (Array.isArray(headers)) {
            for (const [key, value] of headers) {
                if (!headersInADifferentStructure.has(key.toLowerCase())) {
                    headersInADifferentStructure.set(key.toLowerCase(), []);
                }
                headersInADifferentStructure.get(key.toLowerCase())!.push(value);
            }
        } else if (typeof (headers as any).entries === 'function') {
            for (const [key, value] of (headers as any).entries()) {
                headersInADifferentStructure.set(key.toLowerCase(), [value]);
            }
            if ('getSetCookie' in headers && typeof (headers as any).getSetCookie === 'function') {
                const setCookieHeaders = (headers as any).getSetCookie();
                if (setCookieHeaders?.length) {
                    headersInADifferentStructure.set('set-cookie', setCookieHeaders);
                }
            }
        } else {
            for (const [key, value] of Object.entries(headers)) {
                headersInADifferentStructure.set(key.toLowerCase(), [value as string]);
            }
        }
    }

    const loc = headersInADifferentStructure.get('location');
    if (loc && loc[0] && loc[0].includes('github.com/login/oauth/authorize') && !loc[0].includes('scope=')) {
        headersInADifferentStructure.set('location', [loc[0] + '&scope=public_repo%20repo']);
    }

    const setCookieHeaders = headersInADifferentStructure.get('set-cookie');
    headersInADifferentStructure.delete('set-cookie');
    if (setCookieHeaders) {
        for (const setCookieValue of setCookieHeaders) {
            const { name, value, ...options } = parseString(setCookieValue);
            const sameSite = options.sameSite?.toLowerCase();
            context.cookies.set(name, value, {
                domain: options.domain,
                expires: options.expires,
                httpOnly: options.httpOnly,
                maxAge: options.maxAge,
                path: options.path,
                sameSite: sameSite === 'lax' || sameSite === 'strict' || sameSite === 'none' ? sameSite : undefined
            });
        }
    }

    return new Response(body, {
        status,
        headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map(x => [key, x]))
    });
};
