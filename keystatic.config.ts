// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? { kind: 'local' }
        : {
            kind: 'github',
            repo: 'AastikTripathi/portfolio_updated',
        },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            entryLayout: 'form',
            columns: ['title', 'category', 'featured', 'order'],
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: 'Project Title' },
                }),
                description: fields.text({
                    label: 'Short Description',
                    multiline: true,
                }),
                role: fields.text({
                    label: 'Your Role',
                    defaultValue: 'Lead Developer',
                }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Web Application', value: 'Web Application' },
                        { label: 'AI & Machine Learning', value: 'AI & Machine Learning' },
                        { label: 'Systems & Tooling', value: 'Systems & Tooling' },
                        { label: 'Open Source', value: 'Open Source' },
                        { label: 'Client Work', value: 'Client Work' },
                    ],
                    defaultValue: 'Web Application',
                }),
                techStack: fields.array(fields.text({ label: 'Technology / Tool' }), {
                    label: 'Tech Stack',
                    itemLabel: (props) => props.value,
                }),
                githubUrl: fields.url({
                    label: 'GitHub Repository URL',
                }),
                liveUrl: fields.url({
                    label: 'Live Demo URL',
                }),
                featured: fields.checkbox({
                    label: 'Featured on Homepage',
                    defaultValue: false,
                }),
                order: fields.integer({
                    label: 'Sort Order (lower numbers come first)',
                    defaultValue: 10,
                }),
                publishDate: fields.date({
                    label: 'Launch / Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                coverImage: fields.text({
                    label: 'Cover Image URL or Path',
                }),
                content: fields.markdoc({
                    label: 'Detailed Project Story / Overview',
                }),
            },
        }),

        caseStudies: collection({
            label: 'Case Studies',
            slugField: 'title',
            path: 'src/content/case-studies/*',
            entryLayout: 'form',
            columns: ['title', 'clientOrProject', 'featured', 'timeline'],
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: 'Case Study Title' },
                }),
                subtitle: fields.text({
                    label: 'Subtitle / Core Value Proposition',
                }),
                clientOrProject: fields.text({
                    label: 'Client or Product Name',
                }),
                role: fields.text({
                    label: 'Your Role',
                    defaultValue: 'Full Stack Architect & Developer',
                }),
                timeline: fields.text({
                    label: 'Timeline / Duration',
                    defaultValue: '3 Months',
                }),
                summary: fields.text({
                    label: 'Executive Summary',
                    multiline: true,
                }),
                impactHighlights: fields.array(fields.text({ label: 'Impact Metric / Result' }), {
                    label: 'Impact Highlights',
                    itemLabel: (props) => props.value,
                }),
                techStack: fields.array(fields.text({ label: 'Technology' }), {
                    label: 'Tech Stack',
                    itemLabel: (props) => props.value,
                }),
                featured: fields.checkbox({
                    label: 'Featured on Homepage',
                    defaultValue: false,
                }),
                publishDate: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                coverImage: fields.text({
                    label: 'Cover Image URL or Path',
                }),
                content: fields.markdoc({
                    label: 'Case Study Content (Problem, Architecture, Results)',
                }),
            },
        }),

        blogs: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blogs/*',
            entryLayout: 'form',
            columns: ['title', 'publishDate', 'readingTime'],
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: { label: 'Blog Post Title' },
                }),
                publishDate: fields.date({
                    label: 'Publish Date',
                    defaultValue: { kind: 'today' },
                }),
                author: fields.text({
                    label: 'Author Name',
                    defaultValue: 'Aastik Tripathi',
                }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (props) => props.value,
                }),
                summary: fields.text({
                    label: 'Short Summary / Excerpt',
                    multiline: true,
                }),
                coverImage: fields.text({
                    label: 'Cover Image URL or Path',
                }),
                readingTime: fields.text({
                    label: 'Estimated Reading Time',
                    defaultValue: '5 min read',
                }),
                content: fields.markdoc({
                    label: 'Article Body',
                }),
            },
        }),

        career: collection({
            label: 'Career Milestones',
            slugField: 'company',
            path: 'src/content/career/*',
            entryLayout: 'form',
            columns: ['role', 'company', 'startDate', 'endDate', 'order'],
            format: { contentField: 'content' },
            schema: {
                role: fields.text({
                    label: 'Role / Title',
                }),
                company: fields.slug({
                    name: { label: 'Company / Organization Slug' },
                }),
                companyUrl: fields.url({
                    label: 'Company Website URL',
                }),
                location: fields.text({
                    label: 'Location (e.g. Bengaluru / Remote)',
                    defaultValue: 'Remote',
                }),
                startDate: fields.text({
                    label: 'Start Date (e.g. Jan 2024)',
                }),
                endDate: fields.text({
                    label: 'End Date (e.g. Present)',
                    defaultValue: 'Present',
                }),
                current: fields.checkbox({
                    label: 'Currently working here',
                    defaultValue: false,
                }),
                type: fields.select({
                    label: 'Engagement Type',
                    options: [
                        { label: 'Full-time', value: 'Full-time' },
                        { label: 'Part-time', value: 'Part-time' },
                        { label: 'Contract', value: 'Contract' },
                        { label: 'Freelance', value: 'Freelance' },
                        { label: 'Open Source', value: 'Open Source' },
                        { label: 'Education', value: 'Education' },
                    ],
                    defaultValue: 'Full-time',
                }),
                summary: fields.text({
                    label: 'Role Summary',
                    multiline: true,
                }),
                highlights: fields.array(fields.text({ label: 'Key Achievement' }), {
                    label: 'Key Achievements',
                    itemLabel: (props) => props.value,
                }),
                skills: fields.array(fields.text({ label: 'Skill or Tech' }), {
                    label: 'Skills Used',
                    itemLabel: (props) => props.value,
                }),
                order: fields.integer({
                    label: 'Chronological Sort Order (1 = Most recent)',
                    defaultValue: 1,
                }),
                content: fields.markdoc({
                    label: 'Extended Notes / Context',
                }),
            },
        }),
    },
});
