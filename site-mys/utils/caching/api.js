module.exports = {
  urlPattern: /^https?.*/,
  handler: 'cacheFirst',
  options: {
    cacheName: 'https-calls',
  }
}