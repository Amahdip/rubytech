"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Rocket,
  ScanSearch,
  Settings2,
  Shield,
} from "lucide-react";

import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = t("process.steps");

  if (!Array.isArray(stepsData) || stepsData.length === 0) {
    return null;
  }

  const iconsMap: Record<string, any> = {
    audit: ScanSearch,
    design: BarChart3,
    build: Settings2,
    deploy: Rocket,
    scale: Shield,
  };

  const steps = stepsData.map((step) => ({
    ...step,
    icon: iconsMap[step.id] || Shield,
  }));

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-widest text-ruby"
          >
            {t("process.badge")}
          </motion.p>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 type-section-title text-3xl sm:text-4xl"
          >
            {t("process.title")}
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Process steps"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${step.id}`}
                  id={`tab-${step.id}`}
                  onClick={() => handleStepClick(i)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-start transition-all duration-200 lg:w-full",
                    isActive
                      ? "border-ruby/40 bg-ruby/10 text-foreground"
                      : "border-border bg-surface/40 text-muted-foreground hover:border-border hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                      isActive
                        ? "bg-ruby text-white"
                        : "bg-hover text-muted-foreground",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="hidden text-sm font-medium sm:inline lg:inline">
                    {step.title}
                  </span>
                  <Icon className="size-4 shrink-0 sm:hidden lg:hidden" />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-4">
            <div
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className="rounded-2xl themed-card bg-surface/60 p-8 backdrop-blur-xl"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-ruby/10 ring-1 ring-ruby/20">
                <ActiveIcon className="size-6 text-ruby" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                {active.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {active.description}
              </p>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-ruby">
                <span className="size-1.5 rounded-full bg-ruby animate-pulse-ruby" />
                {t("process.step_count", { index: activeStep + 1, total: steps.length })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
