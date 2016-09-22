'use strict'

const tap = require('tap')
const handlers = require('../../handlers/view')

tap.equal(Object.keys(handlers).length, 2, 'There are 2 view handlers')

tap.ok(handlers.getFrontpage, 'Handler has method getFrontpage')

tap.ok(handlers.doSearch, 'Handler has method doSearch')
