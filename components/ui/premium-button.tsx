"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { AnchorLink } from "@/components/anchor-link";
import { useTranslation } from "@/hooks/use-translation";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MotionAnchorLink = motion.create(AnchorLink);

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.01 },
  tap: { scale: 0.99 },
};

type PremiumButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PremiumButton({
  href,
  variant = "primary",
  size = "default",
  showArrow = false,
  children,
  className,
  type = "button",
  onClick,
}: PremiumButtonProps) {
  const { locale } = useTranslation();
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: isRtl ? -3 : 3 },
  };

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ruby/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "transform-gpu antialiased",
    size === "lg" ? "h-12 px-8 text-base" : "h-10 px-5 text-sm",
    variant === "primary"
      ? "bg-ruby text-white shadow-lg shadow-ruby/20"
      : "border border-border bg-hover text-foreground",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <motion.span
          variants={arrowVariants}
          transition={springSnappy}
          className="relative z-10 inline-flex"
        >
          <ArrowIcon className="size-4" />
        </motion.span>
      )}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px origin-left scale-x-0 opacity-0",
          "transition-[transform,opacity] duration-200 ease-out group-hover:scale-x-100 group-hover:opacity-100",
          variant === "primary" ? "bg-white/50" : "bg-ruby",
        )}
      />
    </>
  );

  if (href) {
    return (
      <MotionAnchorLink
        href={href}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={springSnappy}
        className={baseClass}
      >
        {inner}
      </MotionAnchorLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      transition={springSnappy}
      className={baseClass}
    >
      {inner}
    </motion.button>
  );
}
