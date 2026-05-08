import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resumeData } from "@/data/resume";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="A timeline of engineering leadership, platform modernization, and high-scale product delivery."
    >
      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-zinc-300 dark:before:bg-zinc-700">
        {resumeData.experience.map((item) => (
          <div key={`${item.company}-${item.start}`} className="relative pl-10">
            <span className="absolute left-[0.55rem] top-5 h-2.5 w-2.5 rounded-full bg-zinc-700 dark:bg-zinc-300" />
            <Card>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.start} - {item.end}
                </p>
              </div>
              <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="list-disc marker:text-zinc-400">
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
