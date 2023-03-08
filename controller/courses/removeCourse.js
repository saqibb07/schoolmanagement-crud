const courseService = require('../../services/coursesServices')

module.exports = async function (req, res) {
  const data = await courseService.removeCourse()
  res.send(data)
}
