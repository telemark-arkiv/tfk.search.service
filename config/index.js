'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go',
  ELASTIC_URL: process.env.ELASTIC_URL || 'http://elasticserver',
  ELASTIC_PORT: process.env.ELASTIC_PORT || '9200'
}

module.exports = config
