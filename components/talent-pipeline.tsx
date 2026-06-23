"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  GitMerge, 
  ArrowRight,
  Sparkles,
  Lock,
  Cpu,
  Terminal,
  Activity
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

interface Stage {
  id: string;
  title: string;
  badge: string;
  metric: string;
  metricLabel: string;
  description: string;
}

const defaultStages: Stage[] = [
  {
    id: "sourcing",
    title: "Elite Sourcing (SalamRuby)",
    badge: "Phase 1: Ingestion",
    metric: "Top 5%",
    metricLabel: "Graduates Accepted",
    description: "We identify and recruit the most brilliant minds from SalamRuby Academy's intensive systems-programming curricula, ensuring high base technical capability."
  },
  {
    id: "mentorship",
    title: "Architect Mentorship",
    badge: "Phase 2: Processing",
    metric: "1:1 Ratio",
    metricLabel: "Senior Supervision",
    description: "Every incoming junior engineer is paired with a Principal Architect. They work under rigorous pair-programming, lint checks, and strict architectural guidelines."
  },
  {
    id: "delivery",
    title: "Production-Grade Value",
    badge: "Phase 3: Delivery",
    metric: "40%+",
    metricLabel: "Cost Optimization",
    description: "The junior-architect hybrid model delivers enterprise-quality features at highly optimized costs. Complete continuous delivery, zero-downtime oversight."
  }
];

export function TalentPipeline() {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(0);

  // Retrieve localized strings
  const localizedBadge = t("talentPipeline.badge");
  const localizedTitle = t("talentPipeline.title");
  const localizedDesc = t("talentPipeline.description");
  
  let stages: Stage[] = t("talentPipeline.stages");
  if (!stages || typeof stages === "string" || !Array.isArray(stages)) {
    stages = defaultStages;
  }

  const activeStage = stages[activeIdx];

  // Helper icons for the visual stages
  const getStageIcon = (id: string) => {
    switch (id) {
      case "sourcing":
        return GraduationCap;
      case "mentorship":
        return Users;
      case "delivery":
        return GitMerge;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      id="talent-pipeline"
      aria-labelledby="talent-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-ruby/5 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -left-40 size-80 rounded-full bg-ruby/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-80 rounded-full bg-ruby/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-widest text-ruby flex items-center gap-2"
              >
                <Sparkles className="size-4 animate-pulse" />
                {localizedBadge}
              </motion.p>
              <motion.h2
                id="talent-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                {localizedTitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 leading-relaxed text-muted-foreground text-sm sm:text-base"
              >
                {localizedDesc}
              </motion.p>
            </div>

            {/* Quick Interactive Selector */}
            <div className="flex flex-col gap-2">
              {stages.map((stage, idx) => {
                const Icon = getStageIcon(stage.id);
                const isActive = idx === activeIdx;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border p-4 text-start transition-all duration-300",
                      isActive
                        ? "border-ruby/30 bg-ruby/5 shadow-xs"
                        : "border-border bg-surface/30 hover:border-ruby/20 hover:bg-surface/50"
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isActive
                          ? "bg-ruby/20 border-ruby/30 text-ruby"
                          : "bg-panel-muted border-border text-muted-foreground"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-ruby uppercase tracking-wider">
                        {stage.badge}
                      </span>
                      <span className="block text-sm font-semibold mt-0.5 truncate">
                        {stage.title}
                      </span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "size-4 shrink-0 transition-transform duration-300",
                        isActive ? "text-ruby translate-x-1" : "text-muted/40"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Pipeline Interactive Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 backdrop-blur-xl themed-card">
              <div className="absolute inset-0 grid-bg rounded-2xl opacity-20" />

              {/* Dynamic Connecting Lines (Vertical Flow for visual representation) */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 py-4">
                
                {/* SVG connection lines for desktop and mobile */}
                <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
                  <svg className="w-full h-full text-border" fill="none">
                    <path
                      d="M 120 56 L 310 56"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                    />
                    <path
                      d="M 310 56 L 500 56"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                    />
                    {/* Animated laser pulse on path */}
                    <motion.path
                      d="M 120 56 H 500"
                      stroke="url(#ruby-gradient)"
                      strokeWidth="2"
                      strokeDasharray="20 180"
                      animate={{ strokeDashoffset: [0, -200] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="ruby-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E11D48" stopOpacity="0" />
                        <stop offset="50%" stopColor="#E11D48" stopOpacity="1" />
                        <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {stages.map((stage, idx) => {
                  const Icon = getStageIcon(stage.id);
                  const isActive = idx === activeIdx;

                  return (
                    <div
                      key={stage.id}
                      onClick={() => setActiveIdx(idx)}
                      className="relative z-10 flex flex-col items-center cursor-pointer group flex-1"
                    >
                      {/* Outer Ring */}
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1,
                          borderColor: isActive ? "var(--ruby)" : "rgba(225, 29, 72, 0)"
                        }}
                        transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
                        className={cn(
                          "flex size-16 items-center justify-center rounded-full border-2 bg-panel-muted transition-all duration-300",
                          isActive
                            ? "border-ruby shadow-[0_0_20px_rgba(225,29,72,0.25)]"
                            : "border-border hover:border-ruby/30"
                        )}
                      >
                        <div
                          className={cn(
                            "flex size-12 items-center justify-center rounded-full transition-colors",
                            isActive ? "bg-ruby/15 text-ruby" : "bg-surface text-muted-foreground"
                          )}
                        >
                          <Icon className="size-6" />
                        </div>
                      </motion.div>

                      {/* Small node label */}
                      <span
                        className={cn(
                          "mt-3 text-xs font-bold uppercase tracking-wider text-center transition-colors",
                          isActive ? "text-ruby" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {stage.badge.split(":")[0]}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Showcase Detail Panel with AnimatePresence */}
              <div className="relative mt-8 min-h-[220px] rounded-xl border border-border bg-panel-muted p-5 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="grid gap-6 md:grid-cols-12 items-center"
                  >
                    {/* Big Metric Display */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4 border border-ruby/10 bg-ruby/5 rounded-lg">
                      <span className="text-3xl sm:text-4xl font-extrabold text-ruby tracking-tight">
                        {activeStage.metric}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                        {activeStage.metricLabel}
                      </span>
                    </div>

                    {/* Detailed textual content */}
                    <div className="md:col-span-8 space-y-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ruby/10 px-2.5 py-0.5 text-xs font-semibold text-ruby">
                        {activeStage.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold">
                        {activeStage.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {activeStage.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Additional interactive visual placeholder representing the selected phase */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {activeStage.id === "sourcing" && "pipeline.ingestion → active"}
                      {activeStage.id === "mentorship" && "pipeline.mentorship → active"}
                      {activeStage.id === "delivery" && "pipeline.delivery → active"}
                    </span>
                  </div>
                  
                  {/* Subtle technical visual */}
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    {activeStage.id === "sourcing" && (
                      <>
                        <Terminal className="size-3 text-ruby" />
                        <span className="font-mono text-[9px]">ruby.curriculum_check()</span>
                      </>
                    )}
                    {activeStage.id === "mentorship" && (
                      <>
                        <Cpu className="size-3 text-ruby animate-spin-slow" />
                        <span className="font-mono text-[9px]">architect.review_loop()</span>
                      </>
                    )}
                    {activeStage.id === "delivery" && (
                      <>
                        <Activity className="size-3 text-ruby" />
                        <span className="font-mono text-[9px]">deploy.ci_cd_verify()</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
