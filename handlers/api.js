'use strict'

const elasticsearch = require('elasticsearch')
const config = require('../config')
const client = new elasticsearch.Client({
  host: config.ELASTIC_URL + ':' + config.ELASTIC_PORT,
  log: 'error'
})

module.exports.doSearch = (request, reply) => {
  client.search({
    q: request.params.query || request.query.query,
    size: request.query.size || 20,
    from: request.query.from || 0,
    index: request.params.index || ''
  }, function (error, body) {
    reply(error || body)
  })
}

module.exports.addDocument = (request, reply) => {
  var body = request.payload
  var doc = {}

  if (request.params.index && request.params.type) {
    doc.index = request.params.index
    doc.type = request.params.type
    doc.body = body
  } else {
    doc = body
  }
  client.create(doc, function (error, body) {
    reply(error || body)
  })
}

module.exports.deleteIndex = (request, reply) => {
  var index = request.params.index
  client.indices.delete({
    index: index
  }, function (error, body) {
    reply(error || body)
  })
}

module.exports.doPing = (request, reply) => {
  client.ping({
    q: 'wunderbar'
  }, function (error, body) {
    reply(error || 'pong')
  })
}
