'use strict'

const tap = require('tap')
const handlers = require('../../handlers/api')

tap.equal(Object.keys(handlers).length, 4, 'There are 4 api handlers')

tap.ok(handlers.doSearch, 'Handler has method doSearch')

tap.ok(handlers.doPing, 'Handler has method doPing')

tap.ok(handlers.addDocument, 'Handler has method addDocument')

tap.ok(handlers.deleteIndex, 'Handler has method deleteIndex')
