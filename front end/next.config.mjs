/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // 主机名
        port: '', // 如果没有特定端口，保持为空字符串是正确的
        pathname: '/**', // 匹配所有路径
      },
      {
        protocol: 'https',
        hostname: 'violetchocolates.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
