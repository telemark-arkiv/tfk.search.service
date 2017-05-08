'use strict'

const elasticsearch = require('elasticsearch')
const config = require('../config')
const client = new elasticsearch.Client({
  host: config.ELASTIC_URL,
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
  const params = request.params
  const query = params ? request.params.query : request.query.query
  client.search({
    q: query,
    size: request.query.size || 20,
    from: request.query.from || 0
  }, (error, data) => {
    if (error) {
      reply(error)
    } else {
      const viewOptions = {
        query: query,
        total: data.hits.total,
        results: data.hits.hits || []
      }
      reply.view('index', viewOptions)
    }
  })
}
