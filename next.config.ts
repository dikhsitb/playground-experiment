import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      { source: "/experiments", destination: "/#experiments", permanent: false },
      { source: "/about", destination: "/", permanent: false },
      {
        source: "/experiments/:slug",
        destination: "/#:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
