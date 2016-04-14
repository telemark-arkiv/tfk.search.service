'use strict'

var view = require('../handlers/view')

var routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: view.getFrontpage,
      description: 'Show the frontpage',
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/search',
    config: {
      handler: view.doSearch,
      description: 'Search',
      auth: false
    }
  }
]

module.exports = routes
