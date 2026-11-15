import { usePortfolioData } from "@/providers/portfolio-provider";
import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import { TerminalComponent } from "@/components/home/terminal"

export function AboutSection() {
    const { about, title } = usePortfolioData();
    return (
        <section
            id="about"
            className="grid grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16 md:grid-rows-2"
        >
            <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                    {about.greeting}{" "}
                    <span className="bg-gradient-to-r from-ring via-chart-1 to-primary bg-clip-text text-transparent">
                        Gabriella
                        <br />
                        Corrêa
                    </span>
                </h1>

                <p className="mb-5 text-lg font-medium text-foreground/90 sm:text-xl">
                    {title}
                </p>

                <p className="mb-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {about.bioIntro}{" "}
                    <span className="font-medium text-chart-2">Laravel (PHP 8.3)</span>
                    ,{" "}
                    <span className="font-medium text-chart-1">React / Next.js</span>
                    ,{" "}
                    <span className="font-medium text-chart-4">TypeScript</span>
                    {about.bioAnd}{" "}
                    <span className="font-semibold text-foreground">Docker</span>.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_35%,transparent)] transition-all hover:bg-primary/90"
                    >
                        {about.viewProjects}
                        <FaArrowDown className="text-xs" />
                    </a>

                    <a
                        href="#experience"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-card"
                    >
                        <FaFileDownload className="text-ring" />
                        {about.resumeInfo}
                    </a>
                </div>
            </div>

            <TerminalComponent />
        </section>
    );
}