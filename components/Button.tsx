import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-500",
        variant === "ghost" &&
          "border border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus-visible:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
        className
      )}
    >
      {children}
    </Link>
  );
}
