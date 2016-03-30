'use strict'

var config = {
  SERVER_PORT_API: process.env.SERVER_PORT_API || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'Louie Louie, oh no, I got to go',
  ELASTIC_URL: process.env.ELASTIC_URL || 'http://elasticserver',
  ELASTIC_PORT: process.env.ELASTIC_PORT || '9200'
}

module.exports = config
