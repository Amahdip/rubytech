import { BentoGrid } from "@/components/bento-grid";
import { CaseStudies } from "@/components/case-studies";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { HashScrollHandler } from "@/components/anchor-link";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/infrastructure-lines";
import { MainNav } from "@/components/main-nav";
import { PipelineVisual } from "@/components/pipeline-visual";
import { ProcessTimeline } from "@/components/process-timeline";
import { TalentPipeline } from "@/components/talent-pipeline";
import { TechMarquee } from "@/components/tech-marquee";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <div className="relative flex min-h-screen flex-col overflow-x-clip">
        <MainNav />
        <main className="flex-1">
          <Hero />
          <TechMarquee />
          <SectionDivider />
          <BentoGrid />
          <SectionDivider />
          <PipelineVisual />
          <SectionDivider />
          <TalentPipeline />
          <SectionDivider />
          <CaseStudies />
          <ProcessTimeline />
          <ContactCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
