const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};
