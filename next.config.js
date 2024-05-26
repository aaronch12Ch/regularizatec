/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

module.exports = withImages(withTM());
const nextConfig = {
    images: {
      domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.node/,
        use: "raw-loader",
      });
  return config;
    },
  };
module.exports = nextConfig
