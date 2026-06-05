import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-foreground/[0.02] p-4 font-mono text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  );
}

function Code({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const isInline = !className;
  if (isInline) {
    return (
      <code
        className="rounded bg-foreground/[0.04] px-1.5 py-0.5 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  }
  return (
    <code className={cn("font-mono text-sm", className)} {...props}>
      {children}
    </code>
  );
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-12 text-3xl font-bold tracking-tight first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-base leading-relaxed text-muted">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-accent underline-offset-4 transition-colors duration-200 hover:underline"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 text-muted italic">
      {children}
    </blockquote>
  ),
  pre: Pre,
  code: Code,
  hr: () => <hr className="my-10 border-border" />,
  img: ({ src, alt }) => (
    <figure className="my-8">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-foreground/[0.02]">
        <div className="flex h-full items-center justify-center">
          <span className="font-mono text-xs text-muted/40">
            {alt ?? "image"}
          </span>
        </div>
      </div>
      {alt && (
        <figcaption className="mt-2 text-center text-xs text-muted">
          {alt}
        </figcaption>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} className="hidden" />
    </figure>
  ),
};
