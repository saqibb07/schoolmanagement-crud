const bcrypt = require('bcrypt')
const courseModel = require('../model/coursesModel')

module.exports = {
  addCourse: async function (body) {
    // const user = await courseModel.getCourseByAttribute(body)
    // if (user.count != 0) {
    //   return 'Courses already exists!'
    // }

    const data = await courseModel.addCourse(body)
    return data
  },

  getCourse: async function () {
    const data = await courseModel.getCourse()
    return data
  },

  getCourseById: async function (ids) {
    const data = await courseModel.getCourseById(ids)
    return data
  },

  updateCourse: async function (body) {
    const data = await courseModel.updateCourse(body)
    return data
  },

  removeCourse: async function (ids) {
    const student = await courseModel.getCourseById(body)
    if (user.count != 0) {
      return 'user already exists!'
    }
    const data = await courseModel.removeCourse(ids)
    return data
  },
}
