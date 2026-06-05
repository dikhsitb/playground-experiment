import { Badge } from "@/components/ui/badge";
import type { ExperimentMeta } from "@/lib/experiments";

interface ExperimentCardProps {
  experiment: ExperimentMeta;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <a
      href={`#${experiment.slug}`}
      className="group flex flex-col gap-4 transition-opacity duration-200"
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-foreground/[0.02] transition-colors duration-200 group-hover:border-foreground/20">
        <div className="flex h-full items-center justify-center">
          <span className="font-mono text-xs text-muted/40">
            {experiment.thumbnail ?? "preview"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Badge variant="outline">{experiment.category}</Badge>
          <time className="text-xs text-muted">{formatDate(experiment.date)}</time>
        </div>
        <h3 className="text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent">
          {experiment.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">
          {experiment.description}
        </p>
      </div>
    </a>
  );
}
