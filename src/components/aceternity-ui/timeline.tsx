//refactored, not the original from aceternity
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [height, setHeight] = useState(0);
  const [dotOffsets, setDotOffsets] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      if (!ref.current) return;
      const containerTop = ref.current.getBoundingClientRect().top;
      setHeight(ref.current.getBoundingClientRect().height);

      const offsets = dotRefs.current.map((dot) => {
        if (!dot) return 0;
        const rect = dot.getBoundingClientRect();
        return rect.top - containerTop + rect.height / 2;
      });
      setDotOffsets(offsets);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"],
  });

  const startY = dotOffsets[activeIndex] ?? 0;
  const endY = dotOffsets[dotOffsets.length - 1] ?? height;
  const maxTravel = Math.max(0, endY - startY);
  const startProgress = height > 0 ? Math.min(0.95, startY / height) : 0;

  const heightTransform = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [0, maxTravel]
  );

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const dot = dotRefs.current[index];
    if (dot) {
      const y = dot.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.45;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative py-4">
        {data.map((item, index) => {
          const isSelected = index === activeIndex;
          const isPassed = index >= activeIndex;

          return (
            <div key={index} className="relative pb-4 pl-10 md:pl-12">
              <span className="sr-only">{item.title}</span>

              <button
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Iniciar linha do tempo em ${item.title}`}
                title={`Focar a partir de ${item.title}`}
                className={`absolute left-0 top-6 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border bg-background transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-border"
                }`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    isPassed
                      ? "bg-primary"
                      : "bg-sidebar-accent-foreground/40"
                  }`}
                />
              </button>

              {item.content}
            </div>
          );
        })}

        <div
          style={{ height: endY + "px" }}
          className="absolute left-3 top-0 w-[2px] overflow-hidden bg-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              top: startY + "px",
              height: heightTransform,
            }}
            className="absolute inset-x-0 w-[2px] rounded-full bg-gradient-to-b from-primary via-chart-1 to-chart-4"
          />
        </div>
      </div>
    </div>
  );
};