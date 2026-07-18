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
        <a
          href={`https://wa.me/${resumeData.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
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
