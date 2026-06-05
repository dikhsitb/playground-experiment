import { ExperimentCard } from "@/components/experiments/experiment-card";
import { ExperimentSection } from "@/components/experiments/experiment-section";
import {
  getAllExperiments,
  getAllExperimentsFull,
  getAllCategories,
} from "@/lib/experiments";

export default function HomePage() {
  const experiments = getAllExperiments();
  const experimentsFull = getAllExperimentsFull();
  const categories = getAllCategories();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium text-accent">Personal Lab</p>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Experiments in AI, design, and frontend.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            A collection of prompts, components, workflows, and UI explorations.
            Not a portfolio — a playground for ideas that don&apos;t fit
            anywhere else.
          </p>
        </div>
      </section>

      {/* Experiments grid */}
      <section id="experiments" className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-24">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experiments</h2>
          <p className="mt-2 text-sm text-muted">
            Prompts, components, workflows, and UI explorations.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} />
          ))}
        </div>
      </section>

      {/* Experiment details */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        {experimentsFull.map((experiment) => (
          <ExperimentSection key={experiment.slug} experiment={experiment} />
        ))}
      </section>
    </div>
  );
}
