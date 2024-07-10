/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true
  },
  esmExternals: false,
  transpilePackages: ['antd', '@ant-design/icons']
}

module.exports = nextConfig
