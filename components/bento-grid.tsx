"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
} from "lucide-react";

import { DevOpsPipeline } from "@/components/infrastructure-lines";
import { SpotlightCard } from "@/components/spotlight-card";
import { springSoft, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Backend Excellence",
    description:
      "Scalable, high-concurrency architectures, microservices, and distributed systems engineered for peak throughput.",
    icon: Server,
    className: "md:col-span-2 md:row-span-2",
    featured: true,
    tags: ["Microservices", "Event Sourcing", "CQRS"],
  },
  {
    title: "DevOps & Cloud-Native",
    description:
      "CI/CD automation, Kubernetes orchestration, and cloud-agnostic infrastructure as code.",
    icon: Cloud,
    className: "md:col-span-1",
    pipeline: true,
    tags: ["Kubernetes", "Terraform", "GitOps"],
  },
  {
    title: "Frontend Engineering",
    description:
      "High-performance, pixel-perfect user interfaces and modern web applications.",
    icon: Code2,
    className: "md:col-span-1",
    tags: ["React", "Next.js", "Design Systems"],
  },
  {
    title: "Distributed Systems",
    description:
      "Fault-tolerant clusters, consensus protocols, and globally distributed data layers.",
    icon: GitBranch,
    className: "md:col-span-1",
    tags: ["Kafka", "Redis", "gRPC"],
  },
  {
    title: "Data Architecture",
    description:
      "Optimized data pipelines, real-time analytics, and schema evolution at scale.",
    icon: Database,
    className: "md:col-span-1",
    tags: ["PostgreSQL", "ClickHouse", "ETL"],
  },
  {
    title: "Platform Engineering",
    description:
      "Internal developer platforms, service meshes, and observability stacks.",
    icon: Layers,
    className: "md:col-span-2",
    tags: ["Istio", "Prometheus", "OpenTelemetry"],
  },
];

export function BentoGrid() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSoft}
            className="text-sm font-medium uppercase tracking-widest text-ruby"
          >
            Core Capabilities
          </motion.p>
          <motion.h2
            id="capabilities-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springSoft, delay: 0.05 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Full-stack engineering,{" "}
            <span className="text-muted-foreground">zero compromise</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <SpotlightCard
                key={cap.title}
                featured={cap.featured}
                className={cn(cap.className)}
              >
                {cap.pipeline && <DevOpsPipeline />}

                <div className="flex size-10 items-center justify-center rounded-lg bg-ruby/10 ring-1 ring-ruby/20">
                  <Icon className="size-5 text-ruby" />
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-panel-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
