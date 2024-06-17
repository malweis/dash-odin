/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn-icons-png.flaticon.com'],
    },
    output: "export",  // <=== enables static exports
  reactStrictMode: true,
  };
  
  export default nextConfig;