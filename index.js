'use strict'

var api = require('./routes/api')

exports.register = function (server, options, next) {
  server.route(api)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
