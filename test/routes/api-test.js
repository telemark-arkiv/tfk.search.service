'use strict'

const tap = require('tap')
const routes = require('../../routes/api')

tap.equal(routes.length, 8, 'There are 8 api routes')
