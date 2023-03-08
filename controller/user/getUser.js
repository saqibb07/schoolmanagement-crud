const usersService = require('../../services/userServices')
module.exports = async function (req, res) {
  const data = await usersService.getUser(req.body)
  res.send(data)
}
