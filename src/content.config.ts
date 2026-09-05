// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        role: z.string().default('Lead Developer'),
        category: z.string().default('Web Application'),
        techStack: z.array(z.string()).default([]),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(100),
        publishDate: z.coerce.date().default(() => new Date()),
        coverImage: z.string().optional(),
    }),
});

const caseStudies = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: './src/content/case-studies' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        clientOrProject: z.string(),
        role: z.string().default('Software Architect & Engineer'),
        timeline: z.string().default('3 Months'),
        summary: z.string(),
        coverImage: z.string().optional(),
        impactHighlights: z.array(z.string()).default([]),
        techStack: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        publishDate: z.coerce.date().default(() => new Date()),
    }),
});

const blogs = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: './src/content/blogs' }),
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date().default(() => new Date()),
        tags: z.array(z.string()).default([]),
        summary: z.string().optional(),
        coverImage: z.string().optional(),
        readingTime: z.string().default('5 min read'),
        author: z.string().default('Aastik Tripathi'),
    }),
});

const career = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc,yaml,json}', base: './src/content/career' }),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        companyUrl: z.string().optional(),
        location: z.string().default('Remote'),
        startDate: z.coerce.string(),
        endDate: z.coerce.string().optional(),
        current: z.boolean().default(false),
        type: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance', 'Open Source', 'Education']).default('Full-time'),
        summary: z.string(),
        highlights: z.array(z.string()).default([]),
        skills: z.array(z.string()).default([]),
        order: z.number().default(1),
    }),
});

export const collections = {
    projects,
    caseStudies,
    blogs,
    career,
};
