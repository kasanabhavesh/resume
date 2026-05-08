import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resumeData } from "@/data/resume";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" description="Depth across architecture, cloud platforms, and product engineering fundamentals.">
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.skills.map((group) => (
          <Card key={group.category}>
            <h3 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
