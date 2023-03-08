const commonModel = require('../model/commonModel')
module.exports = {
  createRole: async function (body) {
    const data = await commonModel.createRole(body)
    return data
  },
  login: async function (body) {
    const data = await commonModel.login(body)
    return data
  },
}
