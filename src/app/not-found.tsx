import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-6 pb-32 pt-32">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Not found</h1>
      <p className="mt-4 text-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 text-sm transition-colors duration-200 hover:text-accent"
      >
        ← Back home
      </Link>
    </div>
  );
}
