// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';
import { inline, block } from '@keystatic/core/content-components';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? { kind: 'local' }
        : {
            kind: 'github',
            repo: 'AastikTripathi/astro_test',
        },
    collections: {
        problems: collection({
            label: 'Problems',
            slugField: 'title',
            path: 'src/content/problems/*',
            entryLayout: 'form',
            columns: ['superCategory', 'category', 'difficulty', 'publishDate'],
            format: { contentField: 'content' },
            schema: {

                title: fields.slug({
                    name: { label: 'Title' },
                }),
                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'Saad Hassan',
                }),
                category: fields.relationship({
                    label: 'Category / Discipline',
                    collection: 'categories',
                }),
                superCategory: fields.select({
                    label: 'Target Exam / Competition',
                    options: [
                        { label: 'JEE (Main / Advanced)', value: 'JEE' },
                        { label: 'ISI (Indian Statistical Institute)', value: 'ISI' },
                        { label: 'CMI (Chennai Mathematical Institute)', value: 'CMI' },
                        { label: 'Putnam (William Lowell Putnam Competition)', value: 'PUTNAM' },
                        { label: 'AIME (American Invitational Mathematics Examination)', value: 'AIME' },
                        { label: 'IOQM (Indian Olympiad Qualifier in Math)', value: 'IOQM' },
                        { label: 'HMMT (Harvard-MIT Math Tournament)', value: 'HMMT' },
                        { label: 'RMO (Regional Math Olympiad)', value: 'RMO' },
                        { label: 'INMO (Indian National Math Olympiad)', value: 'INMO' },
                        { label: 'IMO (International Math Olympiad)', value: 'IMO' },
                        { label: 'TST (Team Selection Test)', value: 'TST' },
                        { label: 'RMM (Romanian Master of Math / RMO)', value: 'RMM' },
                        { label: 'BMO (British Math Olympiad)', value: 'BMO' },
                    ],
                    defaultValue: 'JEE',
                }),
                year: fields.integer({
                    label: 'Exam / Competition Year (e.g. 2024)',
                    validation: { isRequired: false },
                }),
                difficulty: fields.select({
                    label: 'Difficulty Level',
                    options: [
                        { label: 'Beginner', value: 'Beginner' },
                        { label: 'Intermediate', value: 'Intermediate' },
                        { label: 'Advanced', value: 'Advanced' },
                        { label: 'Elite / Olympiad', value: 'Elite' },
                    ],
                    defaultValue: 'Intermediate',
                }),
                publishDate: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag Keyword' }),
                    {
                        label: 'Tags (Stack Exchange Style)',
                        itemLabel: props => props.value || 'New Tag',
                    }
                ),
                content: fields.markdoc({
                    label: 'Problem Content (Statement & Solution)',
                    description: 'Use "## Problem Statement" for the question, and "## Solution & Proof" to start the solution section.',
                    extension: 'md',
                    options: {
                        table: true,
                        image: {
                            directory: 'public/images/problems',
                            publicPath: '/images/problems/',
                        },
                    },
                    components: {
                        wolfram: inline({
                            label: 'Wolfram Demonstration',
                            schema: {
                                id: fields.text({ label: 'Demonstration ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        geogebra: inline({
                            label: 'GeoGebra Applet',
                            schema: {
                                id: fields.text({ label: 'Material ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        youtube: inline({
                            label: 'YouTube Video',
                            schema: {
                                id: fields.text({ label: 'Video ID or URL' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                    },
                }),
                solution: fields.empty(),
                references: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Citation / Title (e.g. Putnam 2021 Paper)' }),
                        url: fields.url({ label: 'Link URL (Optional)', validation: { isRequired: false } }),
                        details: fields.text({ label: 'Author / Journal Details (Optional)', validation: { isRequired: false } }),
                    }),
                    {
                        label: 'Bibliography & References',
                        itemLabel: props => props.fields.title.value || 'New Reference',
                    }
                ),
            },
        }),
        categories: collection({
            label: 'Categories',
            slugField: 'name',
            path: 'src/content/categories/*',
            format: { data: 'yaml' },
            schema: {
                name: fields.slug({
                    name: { label: 'Category Name (e.g. Combinatorics, Number Theory)' }
                }),
                description: fields.text({ label: 'Category Description' }),
                icon: fields.text({ label: 'Emoji Icon (e.g. 🎲, 📈, 📐)', defaultValue: '📐' }),
            },
        }),
        articles: collection({
            label: 'Articles',
            slugField: 'title',
            path: 'src/content/articles/*',
            entryLayout: 'form',
            columns: ['category', 'publishDate'],
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: 'Article Title' },
                }),
                subtitle: fields.text({ label: 'Subtitle / Tagline' }),
                category: fields.relationship({
                    label: 'Category',
                    collection: 'categories',
                }),
                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'Saad Hassan',
                }),
                readingTime: fields.text({
                    label: 'Reading Time (e.g. 6 min read)',
                    defaultValue: '5 min read',
                }),
                publishDate: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag Keyword' }),
                    {
                        label: 'Tags',
                        itemLabel: props => props.value || 'New Tag',
                    }
                ),
                content: fields.markdoc({
                    label: 'Content',
                    extension: 'md',
                    options: {
                        table: true,
                        image: {
                            directory: 'public/images/articles',
                            publicPath: '/images/articles/',
                        },
                    },
                    components: {
                        wolfram: inline({
                            label: 'Wolfram Demonstration',
                            schema: {
                                id: fields.text({ label: 'Demonstration ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        geogebra: inline({
                            label: 'GeoGebra Applet',
                            schema: {
                                id: fields.text({ label: 'Material ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        youtube: inline({
                            label: 'YouTube Video',
                            schema: {
                                id: fields.text({ label: 'Video ID or URL' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                    },
                }),
                references: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Citation / Title (e.g. Annals of Mathematics, Vol. 42)' }),
                        url: fields.url({ label: 'Link URL (Optional)', validation: { isRequired: false } }),
                        details: fields.text({ label: 'Author / Journal Details (Optional)', validation: { isRequired: false } }),
                    }),
                    {
                        label: 'Bibliography & References',
                        itemLabel: props => props.fields.title.value || 'New Reference',
                    }
                ),
            },
        }),
        courses: collection({
            label: 'Courses',
            slugField: 'title',
            path: 'src/content/courses/*',
            format: { data: 'yaml' },
            schema: {
                title: fields.slug({
                    name: { label: 'Course Title' },
                }),
                subtitle: fields.text({ label: 'Subtitle / Short Description' }),
                tag: fields.text({ label: 'Badge Tag (e.g. LIVE COHORT, SELF-PACED)', defaultValue: 'LIVE COHORT' }),
                badgeColor: fields.select({
                    label: 'Badge Color Theme',
                    options: [
                        { label: 'Yellow (Default)', value: 'bg-[#ebef70]' },
                        { label: 'Indigo / Light Blue', value: 'bg-indigo-100' },
                        { label: 'Emerald / Green', value: 'bg-emerald-100' },
                        { label: 'Purple / Violet', value: 'bg-purple-100' },
                    ],
                    defaultValue: 'bg-[#ebef70]',
                }),
                emblem: fields.text({ label: 'Math Emblem Symbol (e.g. ∫, ⬡, ℵ₀, ∑)', defaultValue: '∫' }),
                description: fields.text({ label: 'Full Course Description', multiline: true }),
                price: fields.text({ label: 'Current Price (e.g. ₹14,999)' }),
                oldPrice: fields.text({ label: 'Original Price (e.g. ₹24,999)', validation: { isRequired: false } }),
                redirectLink: fields.text({ label: 'Redirect Link (e.g. Graphy course page)' }),
                features: fields.array(
                    fields.text({ label: 'Feature Highlight' }),
                    {
                        label: 'Feature Highlights List',
                        itemLabel: props => props.value || 'New Highlight',
                    }
                ),
                image: fields.image({
                    label: 'Course Cover Image (Optional)',
                    directory: 'public/images/courses',
                    publicPath: '/images/courses/',
                    validation: { isRequired: false }
                }),
            },
        }),
        tutorials: collection({
            label: 'Tutorials (Problem Solving Techniques)',
            slugField: 'title',
            path: 'src/content/tutorials/*/index',
            entryLayout: 'form',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: 'Tutorial Title' },
                }),
                subtitle: fields.text({ label: 'Subtitle / Tagline' }),
                category: fields.select({
                    label: 'Category / Discipline',
                    options: [
                        { label: 'Combinatorics', value: 'Combinatorics' },
                        { label: 'Algebra', value: 'Algebra' },
                        { label: 'Number Theory', value: 'Number Theory' },
                        { label: 'Geometry', value: 'Geometry' },
                        { label: 'General Strategy', value: 'General Strategy' },
                    ],
                    defaultValue: 'Combinatorics',
                }),
                difficulty: fields.select({
                    label: 'Difficulty Level',
                    options: [
                        { label: 'Introductory', value: 'Introductory' },
                        { label: 'Intermediate', value: 'Intermediate' },
                        { label: 'Advanced', value: 'Advanced' },
                        { label: 'Olympiad', value: 'Olympiad' },
                    ],
                    defaultValue: 'Intermediate',
                }),
                publishDate: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'deMath Academic Team',
                }),
                icon: fields.text({ label: 'Emoji Icon (e.g. ⚡, 🏔️, 🕊️, 📈)', defaultValue: '⚡' }),
                estimatedReadTime: fields.text({ label: 'Read Time (e.g. 15 min lesson)', defaultValue: '15 min lesson' }),
                tags: fields.array(
                    fields.text({ label: 'Tag Keyword' }),
                    {
                        label: 'Tags',
                        itemLabel: props => props.value || 'New Tag',
                    }
                ),
                content: fields.markdoc({
                    label: 'Content (Core Theory & Strategies)',
                    description: 'Introduction, core invariant definitions, pattern-recognition indicators, and standard workflow.',
                    extension: 'md',
                    options: {
                        table: true,
                        image: {
                            directory: 'public/images/tutorials',
                            publicPath: '/images/tutorials/',
                        },
                    },
                    components: {
                        wolfram: inline({
                            label: 'Wolfram Demonstration',
                            schema: {
                                id: fields.text({ label: 'Demonstration ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        geogebra: inline({
                            label: 'GeoGebra Applet',
                            schema: {
                                id: fields.text({ label: 'Material ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        youtube: inline({
                            label: 'YouTube Video',
                            schema: {
                                id: fields.text({ label: 'Video ID or URL' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        tikz: block({
                            label: 'TikZ Diagram',
                            schema: {
                                code: fields.text({ label: 'TikZ Code', multiline: true }),
                                caption: fields.text({ label: 'Caption (Optional)', validation: { isRequired: false } }),
                            },
                        }),
                    },
                }),
            },
        }),
        tutorialWorkedExamples: collection({
            label: 'Worked Examples',
            slugField: 'title',
            path: 'src/content/tutorial-worked-examples/*',
            entryLayout: 'content',
            format: { contentField: 'solution' },
            columns: ['tutorialSlug'],
            schema: {
                title: fields.slug({
                    name: { label: 'Example Title' },
                }),
                tutorialSlug: fields.relationship({
                    label: 'Parent Tutorial',
                    description: 'Which tutorial does this worked example belong to?',
                    collection: 'tutorials',
                }),
                statement: fields.text({
                    label: 'Problem Statement',
                    description: 'The problem being solved. LaTeX math: inline $...$ and display $$...$$.',
                    multiline: true,
                }),
                insight: fields.text({
                    label: 'Key Insight / Takeaway (Optional)',
                    validation: { isRequired: false },
                }),
                solution: fields.markdoc({
                    label: 'Full Solution & Proof',
                    description: 'Step-by-step solution. Full markdown toolbar — paste/upload images, embed YouTube, GeoGebra, TikZ.',
                    extension: 'md',
                    options: {
                        table: true,
                        image: {
                            directory: 'public/images/tutorials',
                            publicPath: '/images/tutorials/',
                        },
                    },
                    components: {
                        wolfram: inline({
                            label: 'Wolfram Demonstration',
                            schema: {
                                id: fields.text({ label: 'Demonstration ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        geogebra: inline({
                            label: 'GeoGebra Applet',
                            schema: {
                                id: fields.text({ label: 'Material ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        youtube: inline({
                            label: 'YouTube Video',
                            schema: {
                                id: fields.text({ label: 'Video ID or URL' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        tikz: block({
                            label: 'TikZ Diagram',
                            schema: {
                                code: fields.text({ label: 'TikZ Code', multiline: true }),
                                caption: fields.text({ label: 'Caption (Optional)', validation: { isRequired: false } }),
                            },
                        }),
                    },
                }),
            },
        }),
        tutorialPracticeProblems: collection({
            label: 'Practice Problems',
            slugField: 'title',
            path: 'src/content/tutorial-practice-problems/*',
            entryLayout: 'content',
            format: { contentField: 'solution' },
            columns: ['tutorialSlug', 'difficulty'],
            schema: {
                title: fields.slug({
                    name: { label: 'Problem Title' },
                }),
                tutorialSlug: fields.relationship({
                    label: 'Parent Tutorial',
                    description: 'Which tutorial does this practice problem belong to?',
                    collection: 'tutorials',
                }),
                difficulty: fields.select({
                    label: 'Difficulty Level',
                    options: [
                        { label: 'Introductory', value: 'Introductory' },
                        { label: 'Intermediate', value: 'Intermediate' },
                        { label: 'Advanced', value: 'Advanced' },
                        { label: 'Olympiad', value: 'Olympiad' },
                    ],
                    defaultValue: 'Intermediate',
                }),
                statement: fields.text({
                    label: 'Problem Statement',
                    description: 'LaTeX math: inline $...$ and display $$...$$.',
                    multiline: true,
                }),
                hint1: fields.text({
                    label: 'Hint 1 — Initial Observation (Optional)',
                    multiline: true,
                    validation: { isRequired: false },
                }),
                hint2: fields.text({
                    label: 'Hint 2 — Identifying the Invariant (Optional)',
                    multiline: true,
                    validation: { isRequired: false },
                }),
                hint3: fields.text({
                    label: 'Hint 3 — Final Reduction (Optional)',
                    multiline: true,
                    validation: { isRequired: false },
                }),
                solution: fields.markdoc({
                    label: 'Complete Solution & Proof',
                    description: 'Full solution. Paste/upload images, embed YouTube, GeoGebra, TikZ. Everything optional.',
                    extension: 'md',
                    options: {
                        table: true,
                        image: {
                            directory: 'public/images/tutorials',
                            publicPath: '/images/tutorials/',
                        },
                    },
                    components: {
                        wolfram: inline({
                            label: 'Wolfram Demonstration',
                            schema: {
                                id: fields.text({ label: 'Demonstration ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        geogebra: inline({
                            label: 'GeoGebra Applet',
                            schema: {
                                id: fields.text({ label: 'Material ID' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        youtube: inline({
                            label: 'YouTube Video',
                            schema: {
                                id: fields.text({ label: 'Video ID or URL' }),
                                title: fields.text({ label: 'Title' }),
                            },
                        }),
                        tikz: block({
                            label: 'TikZ Diagram',
                            schema: {
                                code: fields.text({ label: 'TikZ Code', multiline: true }),
                                caption: fields.text({ label: 'Caption (Optional)', validation: { isRequired: false } }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    ui: {
        navigation: {
            'Problems & Categories': ['problems', 'categories'],
            'Articles': ['articles'],
            'Courses': ['courses'],
            'Tutorials': ['tutorials', 'tutorialWorkedExamples', 'tutorialPracticeProblems'],
        },
    },
});
