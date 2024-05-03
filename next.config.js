/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public', //The output directory of the service worker. Relative to Next.js's root directory.
  cacheOnFrontEndNav: true, // Enable additional route caching when users navigate through pages with next/link.
  aggressiveFrontNavCaching: true, //Cache every <link rel="stylesheet" /> and <script /> on frontend navigation. Requires cacheOnFrontEndNav to be enabled.
  reloadOnOnline: true, // Reload the app when it has gone back online.
  swMinify: true, // to minify the service worker's output filename.
  display: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});
const nextConfig = {};

module.exports = withPWA(nextConfig);
