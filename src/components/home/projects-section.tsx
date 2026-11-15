import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/spell-ui/badge";
import { usePortfolioData } from "@/providers/portfolio-provider";
import { IconFolder } from "@tabler/icons-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ProjectsSection() {
  const { projects, navigation } = usePortfolioData();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section className="space-y-4">
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <IconFolder className="size-10 shrink-0 text-chart-1" />
          <h2 className="text-3xl font-bold tracking-tight">
            {navigation.projects.alttitle}
          </h2>
        </div>
        <p className="text-muted-foreground">{navigation.projects.subtitle}</p>
      </div>

      <div className="border-t border-foreground/20 pt-6 px-12">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem key={p.id}>
                <div className="space-y-4 rounded-xl border border-border bg-card/40 p-6 shadow-md">
                  <div>
                    <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {p.subtitle} · {p.period}
                    </p>
                  </div>

                  <p>{p.description}</p>

                  <ul className="list-disc space-y-1 pl-5">
                    {p.fullDetails.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((t) => (
                      <Badge key={t} variant="blue">{t}</Badge>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-4 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-label={`Ir para ${p.title}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-sidebar-primary"
                  : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}