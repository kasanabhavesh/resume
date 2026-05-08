import { Link2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { resumeData } from "@/data/resume";

export function HeroSection() {
  return (
    <section className="space-y-6 pt-10 sm:pt-14">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Principal Engineer</p>
          <h1 className="prose-balance text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-100">
            {resumeData.name}
          </h1>
        </div>
        <ThemeToggle />
      </div>

      <p className="prose-balance max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
        {resumeData.summary}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="inline-flex items-center gap-2">
          <MapPin size={16} />
          {resumeData.location}
        </span>
        <a href={`mailto:${resumeData.email}`} className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100">
          <Mail size={16} />
          {resumeData.email}
        </a>
        <a href={`tel:${resumeData.phone}`} className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100">
          <Phone size={16} />
          {resumeData.phone}
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {resumeData.socials.map((social) => {
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <Link2 size={16} />
              {social.label}
            </a>
          );
        })}
        <Button href={resumeData.resumePdfPath} className="gap-2" variant="primary">
          Download Resume PDF
        </Button>
      </div>
    </section>
  );
}
