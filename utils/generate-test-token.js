'use strict'

const generateToken = require('tfk-generate-jwt')
const config = require('../config')
const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
const data = {
  cn: 'Bernhard Riemann',
  userId: 'riemann'
}

const token = generateToken({payload: data, key: config.JWT_SECRET, options: options})

console.log(token)
