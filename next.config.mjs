/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.uzum.uz", "cdn4.iconfinder.com", "cdn0.iconfinder.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
};

export default nextConfig;
