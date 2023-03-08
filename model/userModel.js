const { models } = require('../model/defination')
const { Op } = require('sequelize')

module.exports = {
  createUser: async function (body) {
    const result = await models.users.create(body)
    return result
  },

  getUser: async function () {
    const result = await models.users.findAll({
      include: models.roles,
      attributes: { exclude: ['password'] },
    })
    return result
  },

  getUserById: async function (ids) {
    const result = await models.users.findAll({
      where: { id: ids },
      include: models.roles,
    })
    return result
  },

  updateUser: async function (body) {
    const result = await models.users.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    )
    return result
  },

  removeUser: async function (ids) {
    const result = await models.users.destroy({
      where: { id: ids },
    })
    if (result) {
      return 'success'
    }
    return 'fail'
  },

  //validation
  getUserByAttribute: async function (body) {
    const result = await models.users.findAndCountAll({
      where: {
        [Op.or]: [{ userName: body.userName }, { email: body.email }, { phoneNumber: body.phoneNumber }],
      },
    })
    return result
  },
}
