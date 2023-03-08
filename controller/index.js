module.exports = {
  createUser: require('./user/createUser'),
  // createRole: require('./Common/role'),
  getUser: require('./user/getUser'),
  getUserById: require('./user/getUserById'),
  updateUser: require('./user/updateUser'),
  removeUser: require('./user/removeUser'),

  //teacher
  addTeacher: require('./teachers/addTeacher'),
  getTeacher: require('./teachers/getTeacher'),
  updateTeacher: require('./teachers/updateTeacher'),
  removeTeacher: require('./teachers/removeTeacher'),
  //students
  addStudent: require('./students/addStudent'),
  getStudent: require('./students/getStudent'),
  updateStudent: require('./students/updateStudent'),
  removeStudent: require('./students/removeStudents'),
  //courses
  addCourse: require('./courses/addCourse'),
  getCourse: require('./courses/getCourse'),
  updateCourse: require('./courses/updateCourse'),
  removeCourse: require('./courses/removeCourse'),
}
