import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TechnicalBlogPlaceholderSection } from "@/components/sections/TechnicalBlogPlaceholderSection";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <main className="pb-16">
      <Container className="space-y-14">
        <Reveal immediate>
          <HeroSection />
        </Reveal>

        <Reveal immediate delay={0.05}>
          <ExperienceSection />
        </Reveal>

        <Reveal delay={0.08}>
          <SkillsSection />
        </Reveal>

        <Reveal delay={0.11}>
          <CertificationsSection />
        </Reveal>

        <Reveal delay={0.14}>
          <ProjectsSection />
        </Reveal>

        {resumeData.featureFlags.technicalBlog ? (
          <Reveal delay={0.17}>
            <TechnicalBlogPlaceholderSection />
          </Reveal>
        ) : null}

        <FooterSection />
      </Container>
    </main>
  );
}
