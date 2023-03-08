const teacherService = require('../../services/teacherServices')

module.exports = async function (req, res) {
  const data = await teacherService.updateTeacher(req.body)
  res.send(data)
}
