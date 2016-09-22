'use strict'

const tap = require('tap')
const routes = require('../../routes/view')

tap.equal(routes.length, 2, 'There are 2 view routes')
