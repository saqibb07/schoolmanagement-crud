const teacherService = require('../../services/teacherServices')
const userService = require('../../services/userServices')
module.exports = async function (req, res) {
  const data = await teacherService.getTeacher(req.body)
  res.send(data)
}
