import fs from "fs";
import path from "path";
import matter from "gray-matter";

const EXPERIMENTS_DIR = path.join(process.cwd(), "content/experiments");

export type ExperimentCategory =
  | "AI Prompts"
  | "Components"
  | "Workflows"
  | "UI Experiments"
  | "Design Concepts";

export interface ExperimentMeta {
  slug: string;
  title: string;
  description: string;
  category: ExperimentCategory;
  date: string;
  featured?: boolean;
  thumbnail?: string;
}

export interface Experiment extends ExperimentMeta {
  content: string;
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(EXPERIMENTS_DIR)) return [];
  return fs
    .readdirSync(EXPERIMENTS_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

function toMeta(experiment: Experiment): ExperimentMeta {
  const { slug, title, description, category, date, featured, thumbnail } =
    experiment;
  return { slug, title, description, category, date, featured, thumbnail };
}

function parseExperiment(filename: string): Experiment {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(EXPERIMENTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    featured: data.featured ?? false,
    thumbnail: data.thumbnail,
    content,
  };
}

function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllExperiments(): ExperimentMeta[] {
  return sortByDate(getMdxFiles().map((file) => toMeta(parseExperiment(file))));
}

export function getAllExperimentsFull(): Experiment[] {
  return sortByDate(getMdxFiles().map((file) => parseExperiment(file)));
}

export function getExperimentBySlug(slug: string): Experiment | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(EXPERIMENTS_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  return parseExperiment(filename);
}

export function getFeaturedExperiments(): ExperimentMeta[] {
  return getAllExperiments().filter((exp) => exp.featured);
}

export function getAllCategories(): ExperimentCategory[] {
  const categories = new Set(
    getAllExperiments().map((exp) => exp.category)
  );
  return Array.from(categories);
}
