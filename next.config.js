/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ['octokit'],
  },
};

module.exports = nextConfig;
