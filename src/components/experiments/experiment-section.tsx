import { Badge } from "@/components/ui/badge";
import { MdxContent } from "@/components/mdx/mdx-content";
import type { Experiment } from "@/lib/experiments";

interface ExperimentSectionProps {
  experiment: Experiment;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ExperimentSection({ experiment }: ExperimentSectionProps) {
  return (
    <article
      id={experiment.slug}
      className="scroll-mt-8 border-t border-border py-24 first:border-t-0"
    >
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <Badge variant="outline">{experiment.category}</Badge>
          <time className="text-sm text-muted">
            {formatDate(experiment.date)}
          </time>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {experiment.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {experiment.description}
        </p>
      </header>

      <div className="max-w-3xl">
        <MdxContent source={experiment.content} />
      </div>
    </article>
  );
}
