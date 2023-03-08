const courseService = require('../../services/coursesServices')
module.exports = async function (req, res) {
  const data = await courseService.getCourse(req.body)
  res.send(data)
}
