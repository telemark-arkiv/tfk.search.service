'use strict'

const generateToken = require('tfk-generate-jwt')
const config = require('../config')
const data = {
  cn: 'Bernhard Riemann',
  userId: 'riemann'
}

const token = generateToken({payload: data, key: config.JWT_SECRET})

console.log(token)
