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
    q: request.query.query
  }, function (error, body) {
    reply(error || body)
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.doSearch = doSearch
