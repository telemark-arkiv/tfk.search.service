'use strict'

var elasticsearch = require('elasticsearch')
var config = require('../config')
var client = new elasticsearch.Client({
  host: config.ELASTIC_URL + ':' + config.ELASTIC_PORT,
  log: 'error'
})

function getFrontpage (request, reply) {
  client.ping({
    q: 'wunderbar'
  }, function (error, body) {
    reply(error || body)
  })
}

function doSearch (request, reply) {
  client.search({
    q: request.params.query || request.query.query
  }, function (error, body) {
    reply(error || body)
  })
}

function addDocument (request, reply) {
  var body = request.payload
  var doc = {}

  if (request.params.index && request.params.type) {
    doc.index = request.params.index
    doc.type = request.params.type,
    doc.body = body
  } else {
    doc = body
  }
  client.create(doc, function (error, body) {
    reply(error || body)
  })
}

function deleteIndex (request, reply) {
  var index = request.params.index
  client.indices.delete({
    index: index
  }, function (error, body) {
    reply(error || body)
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.doSearch = doSearch

module.exports.addDocument = addDocument

module.exports.deleteIndex = deleteIndex
