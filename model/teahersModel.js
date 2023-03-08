const { models } = require('./defination')
const { Op } = require('sequelize')
const { createUser, getUser } = require('./userModel')
module.exports = {
  addTeacher: async function (body) {
    const createUser1 = {
      name: body.name,
      email: body.email,
      password: body.password,
      phoneNumber: body.phoneNumber,
      role: body.role,
    }
    let createTeacher = {
      teacherId: body.teacherId,
      department: body.department,
      officeLocation: body.officeLocation,
      officeHours: body.officeHours,
    }
    const user = await createUser(createUser1)
    createTeacher = { ...createTeacher, roleId: user.id }
    const result = await models.teachers.create(createTeacher)
    return result
  },

  getTeacher: async function () {
    const result = await models.teachers.findAll({
      include: models.roles,
      attributes: { exclude: ['password'] },
      include: { model: models.users },
    })
    return result
  },

  getTeacherById: async function (ids) {
    const result = await models.teachers.findAll({
      where: { id: ids },
      include: models.roles,
    })
    return result
  },

  updateTeacher: async function (body) {
    const teacher = await models.teachers.findByPk(body.id)
    let user = await teacher.getUser()
    await user.update({ ...body })
    await teacher.update({ ...body })

    // {...body,},
    // { where: { id: body.id }, }

    return 'teacher updated'
  },

  removeTeacher: async function (ids) {
    const teacher = await models.teachers.findOne({
      where: { id: ids },
    })
    if (teacher) {
      await teacher.destroy()
      return 'Teacher deleted'
    }
  },

  //validation
  getTeacherByAttribute: async function (body) {
    const result = await models.teachers.findAndCountAll({
      // where: {
      //   [Op.or]: [{ email: body.email }, { phoneNumber: body.phoneNumber }],
      // },
    })
    return result
  },
}
