/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ['bcrypt', 'octokit'],
  },
};

module.exports = nextConfig;
