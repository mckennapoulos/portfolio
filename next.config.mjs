/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Match the homepage
        destination: "/main", // Redirect to the new homepage
        permanent: true, // Make it a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
