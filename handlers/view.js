'use strict'

const elasticsearch = require('elasticsearch')
const config = require('../config')
const client = new elasticsearch.Client({
  host: config.ELASTIC_URL + ':' + config.ELASTIC_PORT,
  log: 'error'
})

module.exports.getFrontpage = (request, reply) => {
  const viewOptions = {
    query: '',
    total: 0,
    results: []
  }
  reply.view('index', viewOptions)
}

module.exports.doSearch = (request, reply) => {
  const query = request.params.query || request.query.query
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
