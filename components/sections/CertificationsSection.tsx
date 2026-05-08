import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resumeData } from "@/data/resume";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Credential roadmap aligned with cloud-native and architecture leadership goals."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {resumeData.certifications.map((cert) => (
          <Card key={cert.name}>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{cert.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</p>
              <div className="flex items-center gap-2">
                <Badge>{cert.status}</Badge>
                {cert.expectedDate ? (
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">Target: {cert.expectedDate}</span>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
