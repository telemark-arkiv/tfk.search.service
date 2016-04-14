'use strict'

var api = require('./routes/api')
var view = require('./routes/view')

exports.register = function (server, options, next) {
  server.route(view)
  server.route(api)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
