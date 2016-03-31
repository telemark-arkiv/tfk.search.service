'use strict'

var api = require('../handlers/api')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: api.getFrontpage,
      description: 'Show the frontpage',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/search',
    config: {
      handler: api.doSearch,
      description: 'Search the data',
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/api',
    config: {
      handler: api.addIndex,
      description: 'Add an index'
    }
  },
  {
    method: 'POST',
    path: '/api/{index}/{type}',
    config: {
      handler: api.addIndex,
      description: 'Add an index'
    }
  }
]

module.exports = routes
