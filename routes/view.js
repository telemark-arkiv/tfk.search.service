'use strict'

const view = require('../handlers/view')

module.exports = [
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
