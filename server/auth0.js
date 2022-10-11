const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const domain = 'https://pikopiko-2022-brayden.au.auth0.com'
const audience = 'https://movies/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
