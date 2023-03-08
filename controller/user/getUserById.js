const usersService = require('../../services/userServices')
module.exports = async function (req, res) {
  const data = await usersService.getUserById(req.query.ids)
  res.send(data)
}
