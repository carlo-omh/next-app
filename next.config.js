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
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'https-calls',
        }
      },
      {
        urlPattern: /.jpg$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cache-jpg'
        }
      },
      {
        urlPattern: new RegExp('^https://s3-ap-southeast-1.amazonaws.com/*'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'cache-avatars'
        }
      },
      {
        urlPattern: new RegExp('^https://misdirection.ohmyhome.com/image/*'),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'cache-listing-image'
        }
      },
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