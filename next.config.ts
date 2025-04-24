const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (/** @type {any} */ config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
