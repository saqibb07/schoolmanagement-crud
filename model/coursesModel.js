const { models } = require('./defination')
const { Op } = require('sequelize')

module.exports = {
  addCourse: async function (body) {
    const result = await models.courses.create(body)
    return result
  },

  getCourse: async function () {
    const result = await models.courses.findAll({
      include: models.roles,
      attributes: { exclude: ['password'] },
    })
    return result
  },

  getCourseById: async function (ids) {
    const result = await models.courses.findAll({
      where: { id: ids },
      include: models.roles,
    })
    return result
  },

  updateCourse: async function (body) {
    const result = await models.courses.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    )
    return result
  },

  removeCourse: async function (ids) {
    const result = await models.courses.destroy({
      where: { id: ids },
    })
    if (result) {
      return 'success'
    }
    return 'fail'
  },

  //validation
  getCourseByAttribute: async function (body) {
    const result = await models.courses.findAndCountAll({
      // where: {
      //   [Op.or]: [{ email: body.email }, { phoneNumber: body.phoneNumber }],
      // },
    })
    return result
  },
}
