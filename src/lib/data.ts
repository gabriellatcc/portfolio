
import { TbBrandLaravel, TbBrandMysql } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { SiTanstack, SiTailwindcss, SiVite, SiSwagger, SiPhp, SiDocker, SiHtml5 } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavaLine, RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";

const allShots = import.meta.glob("@/assets/systems/*/*.png", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

export interface ProjectScreens {
    desktop?: string;
    mobile: string[];
}

function getScreens(folder: string): ProjectScreens {
    const [desktop, ...mobile] = Object.entries(allShots)
        .filter(([path]) => path.includes(`/systems/${folder}/`))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, url]) => url);
    return { desktop, mobile: mobile.slice(0, 3) };
}

export interface NavigationInterface {
    title: string,
    alttitle: string | null,
    subtitle: string | null,
    description: string | string[] | null;
}
export interface ProjectText {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    fullDetails: string[];
    badge: string;
}

export interface ExperienceText {
    role: string;
    period: string;
    location?: string;
    responsibilities: string[];
}

export interface LanguageText {
    name: string;
    level: string;
}

export interface DeveloperProfile {
    about: {
        greeting: string;
        bioIntro: string;
        bioAnd: string;
        viewProjects: string;
        resumeInfo: string;
    };
    title: string;
    tagline: string;
    availability: string;
    bio: string;
    location: string;
    terminalOverview: {
        status: string;
        education: string;
    };
    projects: Record<"metricnotes" | "casamento" | "drechsler" | "poketeam", ProjectText>;
    experiences: Record<"doctive" | "next" | "liliane", ExperienceText>;
    education: {
        degree: string;
        period: string;
        details: string;
        relevantCoursework: string[];
    };
    languages: Record<"english" | "spanish" | "russian" | "portuguese", LanguageText>;
}

export const portfolioBaseData = {
    email: "gabriellatccorrea@gmail.com",
    linkedin: "https://linkedin.com/in/gabriellatccorrea",
    github: "https://github.com/gabriellatccorrea",
    terminalOverview: {
        coreStack: ["PHP/Laravel", "React", "TypeScript", "MySQL"],
        devops: ["Docker", "Linux Mint", "Git"],
        gpa: "8.21 / 10",
    },
    skills: [
        { name: "PHP", category: "backend", icon: SiPhp, color: "text-indigo-400 bg-indigo-400/15" },
        { name: "Laravel", category: "backend", icon: TbBrandLaravel, color: "text-red-400 bg-red-400/15" },
        { name: "Java", category: "backend", icon: RiJavaLine, color: "text-orange-400 bg-orange-400/15" },
        { name: "TypeScript", category: "frontend", icon: BiLogoTypescript, color: "text-blue-400 bg-blue-400/15" },
        { name: "React", category: "frontend", icon: RiReactjsLine, color: "text-cyan-400 bg-cyan-400/15" },
        { name: "Next.js", category: "frontend", icon: RiNextjsFill, color: "text-black bg-black/15 dark:bg-slate-200/15 dark:text-slate-200" },
        { name: "JavaScript", category: "frontend", icon: BiLogoJavascript, color: "text-yellow-400 bg-yellow-400/15" },
        { name: "MySQL", category: "backend", icon: TbBrandMysql, color: "text-blue-500 bg-blue-500/15" },
        { name: "PostgreSQL", category: "backend", icon: BiLogoPostgresql, color: "text-cyan-500 bg-cyan-500/15" },
        { name: "Docker", category: "tools", icon: SiDocker, color: "text-sky-400 bg-sky-400/15" },
        { name: "Linux", category: "tools", icon: FcLinux, color: "text-emerald-400 bg-emerald-400/15" },
        { name: "Git", category: "tools", icon: FaGitAlt, color: "text-orange-500 bg-orange-500/15" },
        { name: "TanStack (Router/Query)", category: "frontend", icon: SiTanstack, color: "text-amber-400 bg-amber-400/15" },
        { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "text-teal-400 bg-teal-400/15" },
        { name: "HTML", category: "frontend", icon: SiHtml5, color: "text-orange-600 bg-orange-600/15" },
        { name: "Vite", category: "frontend", icon: SiVite, color: "text-purple-400 bg-purple-400/15" },
        { name: "OpenAPI / Swagger", category: "tools", icon: SiSwagger, color: "text-emerald-300 bg-emerald-300/15" },
        { name: "Visual Studio Code", category: "tools", icon: DiVisualstudio, color: "text-blue-400 bg-blue-400/15" },
    ],
    projects: {
        metricnotes: {
            id: "metricnotes",
            screens: getScreens("metricnotes"),
            tools: ["VS Code", "Docker", "Apidog", "Figma", "Git"],
            techStack: ["Laravel", "PHP 8.3", "React", "TypeScript", "JWT", "Tailwind", "Recharts", "Docker"],
        },
        casamento: {
            id: "casamento",
            screens: getScreens("rsvp"),
            tools: ["VS Code", "Apidog", "Docker"],
            techStack: ["Laravel 11", "MySQL", "JWT", "REST API", "Admin Panel"],
        },
        drechsler: {
            id: "drechsler",
            screens: getScreens("drechsler"),
            tools: ["VS Code", "Swagger", "PostgreSQL"],
            techStack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "React", "OpenAPI"],
        },
        poketeam: {
            id: "poketeam",
            screens: getScreens("poketeamuo"),
            tools: ["VS Code", "Figma", "Postman", "Git"],
            techStack: ["Next.js 15", "TypeScript", "Tailwind 4", "Laravel", "PokeAPI", "TanStack Query"],
        },
    },
    experiences: {
        doctive: {
            company: "Doctive",
            technologies: ["PHP", "WordPress", "WooCommerce", "DNS / SMTP", "REST APIs", "Technical Support"],
        },
        next: {
            company: "Next Tecnologia",
            location: "Cruzeiro, SP",
            technologies: ["PHP / Laravel", "React", "TypeScript", "Docker", "Linux"],
        },
        liliane: {
            company: "Liliane Tavares FOTOGRAFIA",
            location: "Itanhandu, MG",
            technologies: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
        },
    },
    education: {
        institution: "Fatec Cruzeiro Prof. Waldomiro May",
        gpa: "8.21 / 10",
    },
    languages: {
        english: { percentage: 65 },
        spanish: { percentage: 35 },
        russian: { percentage: 35 },
        portuguese: { percentage: 100 },
    },
} as const;

export const SITE_CONFIG = {
    author: "Gabriella Corrêa",
    domain: "https://gabriellatcc.github.io/portfolio",
} as const;

export const CONTACT = {
    email: "gabriellatccorrea@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabriellatccorrea/",
    githubAlias: "gabriellatcc",
    whatsapp: "5535992708720",
} as const;

export const LOCATION_CONFIG = {
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cruzeiro%2C+SP%2C+Brazil",
} as const;

export const LINKS = {
    email: `mailto:${CONTACT.email}`,
    whatsapp: `https://wa.me/${CONTACT.whatsapp}`,
    github: `https://github.com/${CONTACT.githubAlias}`,
    linkedin: CONTACT.linkedin,
} as const;

export interface SiteInterface {
    availability: string,
    name: string;
    shortName: string;
    description: string;
    mainDescription: string;
    locationLabel: string;
    schedule: {
        days: string;
        hours: string;
    };
    footer: {
        freelanceTitle: string;
        freelanceBody: string;
        contactTitle: string;
        contactBody: string;
    };
}