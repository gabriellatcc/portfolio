
import { TbBrandLaravel, TbBrandMysql } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { SiTanstack, SiTailwindcss, SiVite, SiSwagger, SiPhp, SiDocker, SiHtml5 } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavaLine, RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconType } from "react-icons";

export interface Skill {
    name: string;
    category: "backend" | "frontend" | "tools";
    icon: IconDefinition | IconType;
    color: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
    fullDetails: string[];
    tools: string[];
    techStack: string[];
    badge: string;
}

export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
    technologies?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    details: string;
    gpa: string;
    relevantCoursework: string[];
}

export interface Language {
    name: string;
    level: string;
    percentage: number;
}

export interface DeveloperProfile {
    title: string;
    tagline: string;
    availability: string;
    bio: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    terminalOverview: {
        status: string;
        coreStack: string[];
        devops: string[];
        education: string;
        gpa: string;
    };
    skills: Skill[];
    projects: Project[];
    experiences: WorkExperience[];
    education: Education;
    languages: Language[];
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
            tools: ["VS Code", "Docker", "Apidog", "Figma", "Git"],
            techStack: ["Laravel", "PHP 8.3", "React", "TypeScript", "JWT", "Tailwind", "Recharts", "Docker"],
        },
        casamento: {
            id: "casamento",
            tools: ["VS Code", "Apidog", "Docker"],
            techStack: ["Laravel 11", "MySQL", "JWT", "REST API", "Admin Panel"],
        },
        drechsler: {
            id: "drechsler",
            tools: ["VS Code", "Swagger", "PostgreSQL"],
            techStack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "React", "OpenAPI"],
        },
        poketeam: {
            id: "poketeam",
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