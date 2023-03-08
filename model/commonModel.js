const { models } = require('../model/defination')
const jwtSecret = require('../config.json')
const jwt = require('jsonwebtoken')
let refreshTokens = []
function generateAccessToken(user) {
  return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}
module.exports = {
  createRole: async function (body) {
    console.log('casdfghjhhsgdv')
    const result = await models.roles.create({ ...body })
    return result
  },

  login: async function (body) {
    let user = await models.users.findOne({
      where: {
        userName: body.userName,
      },
    })
    if (!user) {
      return 'invaid usrname Password'
    }
    user = user.dataValues
    const accessToken = generateAccessToken(user)
    const token = jwt.sign(user, jwtSecret.jwt.secret)
    refreshTokens.push(token)
    return { accessToken: accessToken, refreshTokens: token }
  },
}
