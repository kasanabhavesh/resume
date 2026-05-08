import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resumeData } from "@/data/resume";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" description="Selected architecture contributions with measurable impact.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resumeData.projects.map((project) => (
          <Card key={project.name} className="flex h-full flex-col">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
              <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{project.summary}</p>
              <p className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-200">{project.impact}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
