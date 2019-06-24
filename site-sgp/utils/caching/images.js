module.exports = {
  urlPattern: /.jpg$/,
  handler: 'cacheFirst',
  options: {
    cacheName: 'cache-jpg'
  }
}