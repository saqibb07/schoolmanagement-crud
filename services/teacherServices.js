const bcrypt = require('bcrypt')
const teacherModel = require('../model/teahersModel')

module.exports = {
  addTeacher: async function (body) {
    // body.password = await bcrypt.hashSync(body.password, 10)
    // const user = await teacherModel.getTeacherByAttribute(body)
    // if (user.count != 0) {
    //   return 'user already exists!'
    // }

    const data = await teacherModel.addTeacher(body)
    return data
  },

  getTeacher: async function () {
    const data = await teacherModel.getTeacher()
    return data
  },

  getTeacherById: async function (ids) {
    const data = await teacherModel.getTeacherById(ids)
    return data
  },

  updateTeacher: async function (body) {
    const data = await teacherModel.updateTeacher(body)
    return data
  },

  removeTeacher: async function (ids) {
    const user = await teacherModel.getTeacherById(body)
    if (user.count != 0) {
      return 'teacher already exists!'
    }
    const data = await teacherModel.removeTeacher(ids)
    return data
  },
}
