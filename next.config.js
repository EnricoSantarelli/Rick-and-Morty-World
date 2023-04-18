const withImages = require('next-images');

module.exports = withImages({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
});