import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("space-y-6", className)}>
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {description ? <p className="max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
