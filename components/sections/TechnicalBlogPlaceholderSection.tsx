import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export function TechnicalBlogPlaceholderSection() {
  return (
    <Section
      id="notes"
      title="Technical Blog & Architecture Notes"
      description="Reserved section for deep dives on system design, reliability, and engineering leadership."
    >
      <Card>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          This section is intentionally disabled by default. Enable it from `resumeData.featureFlags.technicalBlog` when you are ready to publish long-form writing.
        </p>
      </Card>
    </Section>
  );
}
