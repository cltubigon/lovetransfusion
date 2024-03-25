// import withPlaiceholder from "@plaiceholder/next"

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "bnsyauupzwhhsloomymu.supabase.co",
//       },
//     ],
//   },
// }

// export default withPlaiceholder(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bnsyauupzwhhsloomymu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
}

export default nextConfig
