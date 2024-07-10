/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  esmExternals: false,
  transpilePackages: ['antd', '@ant-design/icons']
}

module.exports = nextConfig
