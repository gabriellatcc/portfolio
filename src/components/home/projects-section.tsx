import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/spell-ui/badge";
import { usePortfolioData } from "@/providers/portfolio-provider";
import { IconFolder, IconPhoto, IconX } from "@tabler/icons-react";
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
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;
    if (active) autoplay.current.stop();
    else autoplay.current.play();
  }, [api, active]);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

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

      <div className="border-t border-foreground/20 pt-6 md:px-12">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem key={p.id}>
                <div className="flex flex-col space-y-4 rounded-xl border border-border bg-card/40 p-5 shadow-md sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {p.subtitle} · {p.period}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="hidden shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
                    >
                      <IconPhoto className="size-4" />
                      Ver telas
                    </button>
                  </div>

                  <p className="text-sm sm:text-base">{p.description}</p>

                  <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base">
                    {p.fullDetails.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {p.techStack.map((t) => (
                      <Badge key={t} variant="blue">{t}</Badge>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:hidden"
                  >
                    <IconPhoto className="size-4" />
                    Ver telas
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
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

      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl"
            >
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-full bg-muted p-1.5 hover:bg-muted/70"
              >
                <IconX className="size-4" />
              </button>

              <h3 className="pr-10 text-2xl font-semibold">{active.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {active.subtitle} · {active.period}
              </p>

              <div className="space-y-3">
                {active.screens.desktop && (
                  <img
                    src={active.screens.desktop}
                    alt={`${active.title} - desktop`}
                    className="aspect-video w-full rounded-lg border border-border object-cover object-top"
                  />
                )}
                <div className="grid grid-cols-3 gap-3">
                  {active.screens.mobile.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${active.title} - mobile ${i + 1}`}
                      loading="lazy"
                      className="aspect-[9/19] w-full rounded-lg border border-border object-cover object-top"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}