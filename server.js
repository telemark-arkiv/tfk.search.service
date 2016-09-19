'use strict'

const Hapi = require('hapi')
const hapiAuthJwt2 = require('hapi-auth-jwt2')
const vision = require('vision')
const server = new Hapi.Server()
const config = require('./config')
const searchService = require('./index')
const validateAPI = require('./lib/validate-api')

function endIfError (error) {
  if (error) {
    console.error(error)
    process.exit(1)
  }
}

const plugins = [
  {register: hapiAuthJwt2},
  {register: vision},
  {register: searchService}
]

server.connection({
  port: config.SERVER_PORT
})

server.register(plugins, (error) => {
  endIfError(error)

  server.auth.strategy('jwt', 'jwt', {
    key: config.JWT_SECRET,          // Never Share your secret key
    validateFunc: validateAPI,            // validate function defined above
    verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
  })

  server.auth.default('jwt')

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views',
    helpersPath: 'views/helpers',
    partialsPath: 'views/partials',
    layoutPath: 'views/layouts',
    layout: true,
    compileMode: 'sync'
  })
})

module.exports.start = () => {
  server.start(() => {
    console.log('Server running at:', server.info.uri)
  })
}

module.exports.stop = () => {
  server.stop(() => {
    console.log('Server stopped')
  })
}
