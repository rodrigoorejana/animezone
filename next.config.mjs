/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.kitsu.io'], // Adicione os domínios dos quais você está carregando imagens
  },
};

export default nextConfig;