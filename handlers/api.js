'use strict'

const uuid = require('uuid')
const elasticsearch = require('elasticsearch')
const config = require('../config')
const client = new elasticsearch.Client({
  host: config.ELASTIC_URL,
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
  const body = request.payload
  let doc = {}

  if (request.params.index && request.params.type) {
    doc.index = request.params.index
    doc.type = request.params.type
    doc.id = uuid()
    doc.body = body
  } else {
    doc = body
  }

  client.create(doc, (error, body) => {
    if (error) {
      console.log(error)
    }
    reply(error || body)
  })
}

module.exports.deleteIndex = (request, reply) => {
  const index = request.params.index
  client.indices.delete({
    index: index
  }, (error, body) => {
    reply(error || body)
  })
}

module.exports.doPing = (request, reply) => {
  client.ping({
    q: 'wunderbar'
  }, (error, body) => {
    reply(error || 'pong')
  })
}
