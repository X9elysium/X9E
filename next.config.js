const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://main.d3e1pa0azrrlts.amplifyapp.com/'],
  },
  webpack: (config, { isServer }) => {
    // Add custom module aliases
    config.resolve.alias['@config'] = path.resolve(__dirname, 'config');
    config.resolve.alias['@layouts'] = path.resolve(__dirname, 'layouts');
    config.resolve.alias['@lib'] = path.resolve(__dirname, 'lib');
    config.resolve.alias['@partials'] = path.resolve(__dirname, 'partials'); // If you have a partials directory

    // Handle fs and path modules for client-side code
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};
