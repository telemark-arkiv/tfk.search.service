'use strict'

const api = require('./routes/api')
const view = require('./routes/view')

exports.register = (server, options, next) => {
  server.route(view)
  server.route(api)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
