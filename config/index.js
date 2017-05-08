'use strict'

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  ELASTIC_URL: process.env.ELASTIC_URL || 'http://localhost:9200'
}
