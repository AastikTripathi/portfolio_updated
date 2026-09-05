// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const problems = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: "./src/content/problems" }),
    schema: z.object({
        title: z.string(),
        category: z.string(), // Links to the core sub-discipline slug

        // ⚡ Expanded competition enum + optional year
        superCategory: z.enum([
            'JEE', 'ISI', 'CMI', 'PUTNAM', 'AIME', 'IOQM', 'HMMT',
            'RMO', 'INMO', 'IMO', 'TST', 'RMM', 'BMO', 'Olympiad'
        ]).default('JEE'),
        year: z.coerce.number().optional(),

        difficulty: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()).default([]), // Stack Exchange style tags array
        question: z.string().optional(),
        solution: z.string().optional(),
        references: z.array(z.object({
            title: z.string(),
            url: z.string().optional(),
            details: z.string().optional(),
        })).optional(),
    }),
});

const categories = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/categories" }),
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
    }),
});

const articles = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        author: z.string().default('Saad Hassan'),
        references: z.array(z.object({
            title: z.string(),
            url: z.string().optional(),
            details: z.string().optional(),
        })).optional(),
    }),
});

const courses = defineCollection({
    loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/courses" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        tag: z.string().default('LIVE COHORT'),
        badgeColor: z.string().default('bg-[#ebef70]'),
        emblem: z.string().default('∫'),
        description: z.string().optional(),
        price: z.string(),
        oldPrice: z.string().optional(),
        redirectLink: z.string(),
        features: z.array(z.string()).default([]),
        image: z.string().optional(),
    }),
});

const tutorials = defineCollection({
    loader: glob({ pattern: '*/index.{md,mdoc}', base: "./src/content/tutorials" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        category: z.string().default('Combinatorics'),
        difficulty: z.enum(['Introductory', 'Intermediate', 'Advanced', 'Olympiad']).default('Intermediate'),
        publishDate: z.coerce.date().default(() => new Date()),
        author: z.string().default('deMath Academic Team'),
        summary: z.string().optional(),
        icon: z.string().default('⚡'),
        estimatedReadTime: z.string().default('15 min lesson'),
        tags: z.array(z.string()).default([]),
    }),
});

const tutorialWorkedExamples = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: "./src/content/tutorial-worked-examples" }),
    schema: z.object({
        title: z.string(),
        tutorialSlug: z.string().optional(),
        statement: z.string().optional(),
        insight: z.string().optional(),
    }),
});

const tutorialPracticeProblems = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdoc}', base: "./src/content/tutorial-practice-problems" }),
    schema: z.object({
        title: z.string(),
        tutorialSlug: z.string().optional(),
        difficulty: z.string().default('Intermediate'),
        statement: z.string().optional(),
        hint1: z.string().optional(),
        hint2: z.string().optional(),
        hint3: z.string().optional(),
    }),
});

export const collections = { problems, categories, articles, courses, tutorials, tutorialWorkedExamples, tutorialPracticeProblems };

