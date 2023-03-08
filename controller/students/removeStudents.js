const studentService = require('../../services/studentServices')

module.exports = async function (req, res) {
  const data = await studentService.removeStudent()
  res.send(data)
}
