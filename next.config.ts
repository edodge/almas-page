const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export", // enables static export
  basePath: isGithubPages ? "/almas-page" : "",
  assetPrefix: isGithubPages ? "/almas-page/" : "",
  images: {
    unoptimized: true, // required if using next/image
  },
};

module.exports = nextConfig;
