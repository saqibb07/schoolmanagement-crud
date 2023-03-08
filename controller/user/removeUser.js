const usersService = require('../../services/userServices')
module.exports = async function (req, res) {
  const data = await usersService.removeUser()
  res.send(data)
}
