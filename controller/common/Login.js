const commonService = require('../../services/commonServices')
module.exports = async function (req, res) {
  const data = await commonService.login(req.body)
  res.send(data)
}
