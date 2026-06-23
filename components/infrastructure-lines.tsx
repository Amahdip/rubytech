"use client";

import { motion } from "framer-motion";

import { springSoft } from "@/lib/motion";

type InfrastructureLinesProps = {
  variant?: "horizontal" | "vertical";
  className?: string;
};

export function InfrastructureLines({
  variant = "horizontal",
  className,
}: InfrastructureLinesProps) {
  if (variant === "vertical") {
    return (
      <svg
        viewBox="0 0 2 120"
        className={className}
        aria-hidden
        fill="none"
      >
        <path
          d="M1 0 V120"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <motion.path
          d="M1 0 V120"
          stroke="#E11D48"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 18"
          animate={{ strokeDashoffset: [0, -21] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    );
  }

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="h-6 w-full text-border"
        fill="none"
      >
        <path
          d="M0 12 H1200"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <motion.path
          d="M0 12 H1200"
          stroke="#E11D48"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 32"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -36 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          r="2"
          fill="#E11D48"
          initial={{ cx: 0, cy: 12, opacity: 0 }}
          animate={{ cx: [0, 1200], cy: 12, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={springSoft}
      className="mx-auto max-w-6xl px-4 sm:px-6"
    >
      <InfrastructureLines className="py-2" />
    </motion.div>
  );
}
