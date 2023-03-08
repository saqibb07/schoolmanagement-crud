const usersService = require('../../services/userServices')
module.exports = async function (req, res) {
  const data = await usersService.updateUser(req.body)
  res.send(data)
}
