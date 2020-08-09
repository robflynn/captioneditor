const { environment } = require('@rails/webpacker')
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

app_config = {
  resolve: {
    modules: [
      'node_modules',
      'app/javascript'
    ],
    alias: {
      '@lib': resolve('./app/javascript/lib'),
    }
  }
}

// Add typescript parsing to the pipeline
environment.loaders.append('typescript', {
  test: /.(ts|tsx)$/,
  loader: 'ts-loader'
})

// Attach the vue loaders
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

// Attach our application config
environment.config.merge(app_config)

module.exports = environment
