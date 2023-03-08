const { models } = require('./defination')
const { Op } = require('sequelize')
const { createUser, getUser } = require('./userModel')
module.exports = {
  addStudent: async function (body) {
    const createUser1 = {
      name: body.name,
      email: body.email,
      password: body.password,
      phoneNumber: body.phoneNumber,
      role: body.role,
    }
    let createStudent = {
      registrationNumber: body.registrationNumber,
      department: body.department,
      semester: body.semester,
    }
    const user = await createUser(createUser1)
    createStudent = { ...createStudent, roleId: user.id }

    const result = await models.students.create(createStudent)
    return result
  },

  getStudent: async function () {
    const student = await models.students.findByPk(body.id)
    let user = await teacher.getUser()
    await user.update({ ...body })
    await student.update({ ...body })

    return 'student updated'
  },

  getStudentById: async function (ids) {
    const result = await models.students.findAll({
      where: { id: ids },
      include: models.roles,
    })
    return result
  },

  updateStudent: async function (body) {
    const student = await models.students.findByPk(body.id)
    let user = await teacher.getUser()
    await user.update({ ...body })
    await student.update({ ...body })

    return 'student updated'
  },

  removeStudent: async function (ids) {
    const student = await models.students.findOne({
      where: { id: ids },
    })
    if (student) {
      await student.destroy()
      return 'student deleted'
    }
  },

  //validation
  getStudentByAttribute: async function (body) {
    const result = await models.students.findAndCountAll({
      // where: {
      //   [Op.or]: [{ email: body.email }, { phoneNumber: body.phoneNumber }],
      // },
    })
    return result
  },
}
