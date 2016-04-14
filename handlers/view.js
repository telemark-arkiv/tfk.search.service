'use strict'

var elasticsearch = require('elasticsearch')
var config = require('../config')
var client = new elasticsearch.Client({
  host: config.ELASTIC_URL + ':' + config.ELASTIC_PORT,
  log: 'error'
})

function getFrontpage (request, reply) {
  var viewOptions = {
    query: '',
    total: 0,
    results: []
  }
  reply.view('index', viewOptions)
}

function doSearch (request, reply) {
  var query = request.params.query || request.query.query
  client.search({
    q: query,
    size: request.query.size || 20,
    from: request.query.from || 0
  }, function (error, data) {
    if (error) {
      reply(error)
    } else {
      var viewOptions = {
        query: query,
        total: data.hits.total,
        results: data.hits.hits || []
      }
      reply.view('index', viewOptions)
    }
  })
}

module.exports.getFrontpage = getFrontpage

module.exports.doSearch = doSearch
