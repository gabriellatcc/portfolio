import type { DeveloperProfile } from "@/lib/data";

export const portfolioEnus: DeveloperProfile = {
    about: {
        greeting: "Hi, I'm",
        bioIntro: "Specialized in building robust RESTful APIs and modern responsive web interfaces. Experienced with modern stacks such as",
        bioAnd: ", and containerized deployments with",
        viewProjects: "View Projects",
        resumeInfo: "Resume Info",
    },
    title: "Full-Stack Software Developer & Systems Analysis Student",
    tagline: "Gabriella Tavares | Full-Stack Developer",
    availability: "Available for Full-Stack Opportunities",
    bio: "Specialized in building robust RESTful APIs and modern responsive web interfaces. Experienced with modern stacks such as Laravel (PHP 8.3), React / Next.js, TypeScript, and containerized deployments with Docker.",
    location: "Cruzeiro/SP - Brazil",
    terminalOverview: {
        status: "Building clean, scalable backend & frontend systems",
        education: "FATEC Systems Analysis & Dev (2024-2026)",
    },
    projects: {
        metricnotes: {
            title: "MetricNotes",
            subtitle: "Capstone Project (TCC)",
            period: "Aug 2025 – May 2026",
            description: "Full-stack web platform for productivity management and performance metrics designed for independent contractors.",
            fullDetails: [
                "Designed and built a REST API in Laravel (PHP 8.3) with JWT authentication, clear service layers, custom Form Requests, and access authorization policies.",
                "Implemented frontend using React and TypeScript (Vite, TanStack Router and Query, Tailwind, Radix UI, Recharts).",
                "Configured isolated Docker containers for backend (Laravel/PHP) and frontend (React/nginx).",
                "Generated typed HTTP client code automatically via Orval based on OpenAPI specifications.",
            ],
            badge: "TCC Capstone",
        },
        casamento: {
            title: "Casamento Bruna & Alexandre",
            subtitle: "Wedding & RSVP Platform",
            period: "Jun – Jul 2026",
            description: "Complete custom web application with administrative control for guest management and gift registry.",
            fullDetails: [
                "REST API built with Laravel 11 and MySQL with JWT authentication and role-based authorization.",
                "Interactive guest search, RSVP validation, and gift registry (physical item reservation & symbolic contributions).",
                "Dedicated administrative dashboard detailing guest attendance stats and gift contributions.",
            ],
            badge: "Full Stack",
        },
        drechsler: {
            title: "Drechsler Platform",
            subtitle: "Institutional Platform",
            period: "May – Jun 2026",
            description: "Modern web architecture with Fastify API, Prisma ORM, and automated API contracts via OpenAPI.",
            fullDetails: [
                "Full-stack institutional web solution featuring a TypeScript REST API built with Fastify and Prisma ORM.",
                "PostgreSQL database integration with precise schema migrations.",
                "JWT authentication for admin workflows and complete Swagger/OpenAPI interactive documentation.",
            ],
            badge: "TypeScript / Node",
        },
        poketeam: {
            title: "PokeTeam Up",
            subtitle: "Pokémon Team Manager",
            period: "Nov – Dec 2025",
            description: "Interactive team creation system with PokeAPI integration, drag-and-drop slots, and live state.",
            fullDetails: [
                "Backend REST API written in Laravel (PHP 8.3), MySQL database, Sanctum authentication, and item ownership policies.",
                "Frontend created with Next.js 15, TypeScript, and Tailwind CSS v4.",
                "Features drag-and-drop interface for team slot reordering, Radix primitives for accessibility, and TanStack Query for cache & state management.",
            ],
            badge: "Next.js & API",
        },
    },
    experiences: {
        doctive: {
            role: "Freelance Web Developer & Technical Support",
            period: "Mar 2026 – Present",
            location: "Remote · Part-time / On-demand",
            responsibilities: [
                "Provide end-to-end technical support and operational guidance to the business owner, troubleshooting daily platform workflows, payment methods, and NF-e (Webmania) tax emission issues.",
                "Manage support to account recovery, credential restructuring, and Two-Factor Authentication (2FA) across critical platforms (Hostinger, Microsoft, WordPress).",
                "Configure transactional email infrastructure (SMTP) and audit DNS records (SPF, DKIM, DMARC) to resolve email deliverability issues.",
                "Develop custom PHP/JS scripts and third-party API integrations to extend WooCommerce functionality, resolving checkout, caching, and theme layout inconsistencies.",
                "Perform scheduled backups, log audits, and compatibility-tested updates for WordPress core, themes, and plugins, documenting all interventions for full traceability.",
            ],
        },
        next: {
            role: "Full-Stack Development Intern",
            period: "Jan 2026 – Apr 2026",
            responsibilities: [
                "Developed and refactored RESTful APIs in Laravel for decoupled module architecture, establishing Cron Jobs for automated synchronization.",
                "Designed and implemented responsive client metrics dashboards in React and TypeScript within scheduled delivery timelines.",
                "Applied Git best practices for commits, pipelines, and code reviews; configured Docker containers on Linux environments for seamless deployments.",
            ],
        },
        liliane: {
            role: "Technical Support Assistant",
            period: "Apr 2019 – Dec 2024",
            responsibilities: [
                "Configured workstation hardware/software infrastructure for event operations under tight deadlines.",
                "Managed service documentation, scheduling, and process traceability using Microsoft Word & Excel.",
                "Gathered public feedback to redesign equipment signage and workflow, significantly reducing operational support tickets.",
            ],
        },
    },
    education: {
        degree: "Systems Analysis & Development",
        period: "Feb 2024 – Present (Active until 2028)",
        details: "Core coursework completed with active enrollment (eligible for internships through 2028) and ready for Junior full-stack positions.",
        relevantCoursework: [
            "Databases",
            "Data Structures",
            "Object-Oriented Programming",
            "Software Engineering (I, II & III)",
            "Computer Networks",
            "Information Security",
            "Distributed Systems",
            "Web Programming",
        ],
    },
    languages: {
        english: { name: "English", level: "Intermediate" },
        spanish: { name: "Spanish", level: "Basic" },
        russian: { name: "Russian", level: "Basic" },
        portuguese: { name: "Portuguese", level: "Native" },
    },
};