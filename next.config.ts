import type { NextConfig } from "next";

// To install the canary release of Next.js, run:
// pnpm install next@canary

// The 'incremental' value allows you to adopt PPR for specific routes.
// Next, add the experimental_ppr segment config option to your dashboard layout:
const nextConfig: NextConfig = {
  /* config options here */
    // experimental: {
    //     ppr: 'incremental'
    // }
};

export default nextConfig;
