import { usePortfolioData } from "@/providers/portfolio-provider";
import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import { TerminalComponent } from "@/components/home/terminal"
import HighlightedText from "@/components/spell-ui/highlighted-text";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    const { about, title } = usePortfolioData();
    const [first, ...rest] = about.greeting.split(" ");

    return (
    <section
        id="about"
        className="grid grid-cols-1 items-center gap-10 py-10 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:py-16"
    >
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="mb-4 whitespace-nowrap font-extrabold leading-[1.08] tracking-tight text-foreground/95 text-[clamp(1.5rem,7.5vw,3.5rem)]">
            <HighlightedText
                delay={0.4}
                from="right"
                // className="[&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-chart-4 [&>span:first-child]:via-primary [&>span:first-child]:to-chart-2 [&>span:last-child]:mix-blend-normal"
                className="[&>span:first-child]:bg-sidebar-primary [&>span:last-child]:mix-blend-normal"
            >
                {first}
            </HighlightedText>&nbsp;{rest.join(" ")}&nbsp;
            <HighlightedText
                delay={0.4}
                from="bottom"
                className="[&>span:first-child]:bg-sidebar-primary [&>span:last-child]:mix-blend-normal"
            >
                Gabriella Corrêa
            </HighlightedText>
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

            <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3.5 lg:justify-start">
                <Button
                    render={<a href="#projects" />}
                    className="h-auto inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-sidebar-primary px-3.5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-shadow hover:bg-sidebar-primary/90 hover:shadow-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                    {about.viewProjects}
                    <FaArrowDown className="text-xs" />
                </Button>

                <Button
                    render={<a href="#experience" />}
                    variant="secondary"
                    className="h-auto inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl ring-1 ring-border px-3.5 py-2.5 text-xs font-semibold shadow-md transition-shadow hover:shadow-lg sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                    <FaFileDownload className="text-ring" />
                    {about.resumeInfo}
                </Button>
            </div>
        </div>

        <div className="mx-auto w-full max-w-2xl min-w-0 lg:max-w-none">
            <TerminalComponent />
        </div>
    </section>
);
}