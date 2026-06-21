"use client";

import { motion } from "framer-motion";
import type { ReactNode, Ref } from "react";
import { useCallback } from "react";

import { useSpotlight } from "@/hooks/use-spotlight";
import { revealVariants, spotlightConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  featured?: boolean;
};

export function SpotlightCard({
  className,
  children,
  featured,
}: SpotlightCardProps) {
  const {
    ref,
    position,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useSpotlight();

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      ref.current = node;
    },
    [ref],
  );

  return (
    <motion.article
      ref={setRef as Ref<HTMLElement>}
      variants={revealVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-surface/60 p-6 backdrop-blur-sm",
        "border-zinc-200 transition-[border-color,background-color] duration-300",
        "hover:border-zinc-300 hover:bg-surface/80",
        "dark:border-zinc-800 dark:hover:border-zinc-700",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          background: `radial-gradient(${spotlightConfig.size}px circle at ${position.x}px ${position.y}px, ${spotlightConfig.color}, transparent 42%)`,
        }}
      />

      {featured && (
        <div className="pointer-events-none absolute -top-20 -right-20 size-40 rounded-full bg-ruby/10 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      )}

      <div className="relative">{children}</div>
    </motion.article>
  );
}
