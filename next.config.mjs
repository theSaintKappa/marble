/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: () => {
        return {
            "/login": { page: "/auth" },
            "/signup": { page: "/auth" },
        };
    },
};

export default nextConfig;
