const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace fs with a mock module that does nothing on the client side
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};
