'use strict'

var api = require('../handlers/api')

var routes = [
  {
    method: 'GET',
    path: '/api/ping',
    config: {
      handler: api.doPing,
      description: 'Ping the server',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/search',
    config: {
      handler: api.doSearch,
      description: 'Search the data',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/{index}/search',
    config: {
      handler: api.doSearch,
      description: 'Search the data',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/search/{query}',
    config: {
      handler: api.doSearch,
      description: 'Search the data',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/api/{index}/search/{query}',
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
      handler: api.addDocument,
      description: 'Add a document'
    }
  },
  {
    method: 'POST',
    path: '/api/{index}/{type}',
    config: {
      handler: api.addDocument,
      description: 'Add a document'
    }
  },
  {
    method: 'DELETE',
    path: '/api/{index}',
    config: {
      handler: api.deleteIndex,
      description: 'Delete an index',
      auth: false
    }
  }
]

module.exports = routes
