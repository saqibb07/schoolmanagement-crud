const bcrypt = require('bcrypt')
const studentModel = require('../model/studentsModel')

module.exports = {
  addStudent: async function (body) {
    // body.password = await bcrypt.hashSync(body.password, 10)
    // const user = await studentModel.getStudentByAttribute(body)
    // if (user.count != 0) {
    //   return 'user already exists!'
    // }

    const data = await studentModel.addStudent(body)
    return data
  },

  getStudent: async function () {
    const data = await studentModel.getStudent()
    return data
  },

  getStudentById: async function (ids) {
    const data = await studentModel.getStudentById(ids)
    return data
  },

  updateStudent: async function (body) {
    const data = await studentModel.updateUser(body)
    return data
  },

  removeStudent: async function (ids) {
    const student = await studentModel.getStudentById(body)
    if (user.count != 0) {
      return 'student already exists!'
    }
    const data = await studentModel.removeUser(ids)
    return data
  },
}
