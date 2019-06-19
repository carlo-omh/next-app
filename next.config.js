const api = require('./utils/caching/api')
const images = require('./utils/caching/images')

const withOffline = moduleExists('next-offline')
  ? require('next-offline')
  : {};

const nextConfig = {
  target: 'serverless',
  workboxOpts: {
    cacheId: 'omh-web',
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      api,
      images,
    ],
  },
}

module.exports = moduleExists('next-offline')
  ? withOffline(nextConfig)
  : nextConfig

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}