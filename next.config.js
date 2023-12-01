/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@org/acl-poc-lib', '@astrouxds/react'],
}

module.exports = nextConfig
