"use client";

import { useEffect, useRef, useState } from "react";

const technologies = [
  "Kubernetes",
  "Terraform",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "gRPC",
  "OpenTelemetry",
  "AWS",
  "Docker",
  "TypeScript",
  "GraphQL",
];

function MarqueeTrack({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((tech, index) => (
        <span
          key={`${tech}-${index}`}
          className="shrink-0 rounded-full border border-border bg-panel-muted px-4 py-1.5 font-mono text-xs text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const updateRepeatCount = () => {
      const containerWidth = container.offsetWidth;
      const singleSetWidth = measure.offsetWidth;
      if (singleSetWidth <= 0) return;

      const repeatsPerTrack = Math.max(
        2,
        Math.ceil(containerWidth / singleSetWidth) + 1,
      );

      setRepeatCount((prev) =>
        prev !== repeatsPerTrack ? repeatsPerTrack : prev,
      );
    };

    updateRepeatCount();

    const observer = new ResizeObserver(updateRepeatCount);
    observer.observe(container);
    observer.observe(measure);

    return () => observer.disconnect();
  }, []);

  const track = Array.from({ length: repeatCount }, () => technologies).flat();

  return (
    <section
      aria-label="Technology stack"
      className="group relative border-y border-border bg-surface/40 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={measureRef}
          className="pointer-events-none absolute flex items-center gap-3 pr-3 opacity-0"
          aria-hidden
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="shrink-0 rounded-full border border-border bg-panel-muted px-4 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex w-max animate-marquee will-change-transform">
          <MarqueeTrack items={track} />
          <MarqueeTrack items={track} ariaHidden />
        </div>
      </div>
    </section>
  );
}
