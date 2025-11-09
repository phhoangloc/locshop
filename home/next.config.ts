import type { NextConfig } from "next";
const host = [
  "tshop.r10s.jp",
  "shop.r10s.jp",
  "image.rakuten.co.jp"
]
const nextConfig: NextConfig = {
  images: {
    remotePatterns: host.map(item => {
      return ({
        protocol: 'https',
        hostname: item,
        port: "",
        pathname: "/**"
      })


    })

  },
};

export default nextConfig;
