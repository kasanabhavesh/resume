import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-zinc-300/80 bg-[var(--card)] p-5 shadow-soft transition-transform duration-300 hover:-translate-y-0.5 dark:border-zinc-800",
        className
      )}
    >
      {children}
    </article>
  );
}
