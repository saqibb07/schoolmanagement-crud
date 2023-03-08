const commonService = require('../../services/commonServices')
module.exports = async function (req, res) {
  const data = await commonService.createRole(req.body)
  res.send(data)
}
