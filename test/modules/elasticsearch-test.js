'use strict'

const tap = require('tap')
const elasticsearch = require('elasticsearch')

tap.ok(elasticsearch, 'Elasticsearch loads OK')
