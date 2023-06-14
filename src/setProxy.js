const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/authors', {
          target: 'http://localhost:8080',
          changeOrigin: true
      })
  )
};