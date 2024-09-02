import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.uzum.uz", "cdn4.iconfinder.com", "cdn0.iconfinder.com"],
  },
  async rewrites() {
    return [
    ];
  },
};

export default withNextIntl(nextConfig);
