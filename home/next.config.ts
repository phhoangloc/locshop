import type { NextConfig } from "next";

const hostnames = [
  "thumbnail.image.rakuten.co.jp", "image.rakuten.co.jp", "tshop.r10s.jp", "shop.r10s.jp", "www.rakuten.ne.jp", "image.stream.cms.rakuten.co.jp"
]
const nextConfig: NextConfig = {
  images: {
    remotePatterns:

      hostnames.map(hostname => {
        return {
          protocol: 'https',
          hostname: hostname,
          port: "",
          pathname: "/**"
        }
      })
  },
};

export default nextConfig;
