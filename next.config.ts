// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Enable TypeScript support
//   typescript: {
//     // Enables TypeScript error reporting during build
//     ignoreBuildErrors: false, // Set to true to ignore TS errors during build
//   },

//   // Custom Webpack configuration
//   webpack(config, { isServer }) {
//     // Handle server-only dependencies for client-side
//     if (!isServer) {
//       config.externals = [
//         ...config.externals,
//         {
//           '@stackframe/stack': 'commonjs @stackframe/stack', // Exclude server-only lib from client bundle
//         },
//       ];
//     }

//     // Return the updated Webpack config
//     return config;
//   },

//   // You can add any other Next.js config options here
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable TypeScript support
  typescript: {
    // Enables TypeScript error reporting during build
    ignoreBuildErrors: false, // Set to true to ignore TS errors during build
  },

  // Custom Webpack configuration
  webpack(config, { isServer }) {
    // Handle server-only dependencies for client-side
    if (!isServer) {
      config.externals = [
        ...config.externals,
        {
          '@stackframe/stack': 'commonjs @stackframe/stack', // Exclude server-only lib from client bundle
        },
      ];
    }

    // Return the updated Webpack config
    return config;
  },

  // You can add any other Next.js config options here
};

export default nextConfig;
