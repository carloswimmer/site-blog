import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  /* turbopack removed because of conflicts with contentlayer */
  /* turbopack: {}, */
};

export default withContentlayer(nextConfig);
