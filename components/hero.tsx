"use client";

import { motion } from "framer-motion";

import { useTranslation } from "@/hooks/use-translation";
import { HeroTerminal } from "@/components/hero-terminal";
import { PremiumButton } from "@/components/ui/premium-button";
import { springSoft } from "@/lib/motion";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-ruby/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springSoft}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-ruby/20 bg-ruby/10 px-3 py-1 text-xs font-medium text-ruby">
                <span className="size-1.5 rounded-full bg-ruby animate-pulse-ruby" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.05 }}
              className="type-hero mt-6 text-3xl text-foreground sm:text-4xl lg:text-5xl"
            >
              <span className="block">{t("hero.title_part1").trim()}</span>
              <span className="text-gradient-ruby block">
                {t("hero.title_gradient")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.1 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <PremiumButton href="#contact" size="lg" showArrow>
                {t("hero.cta_primary")}
              </PremiumButton>
              <PremiumButton href="#capabilities" variant="secondary" size="lg">
                {t("hero.cta_secondary")}
              </PremiumButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springSoft, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <div>
                <span className="type-stat block text-2xl text-foreground">
                  {t("hero.stats.uptime")}
                </span>
                {t("hero.stats.uptime_label")}
              </div>
              <div>
                <span className="type-stat block text-2xl text-foreground">
                  {t("hero.stats.latency")}
                </span>
                {t("hero.stats.latency_label")}
              </div>
              <div>
                <span className="type-stat block text-2xl text-foreground">
                  {t("hero.stats.ops")}
                </span>
                {t("hero.stats.ops_label")}
              </div>
            </motion.div>
          </div>

          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}
