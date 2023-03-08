var express = require('express')
var router = express.Router()
async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
const { addStudent, getStudent, updateStudent, removeStudent } = require('../Controller/index')
router.post('/addStudent', addStudent)
router.get('/getStudent', getStudent)
router.get('/allStudent', authenticateToken, getStudent)
router.put('/updateStudent', updateStudent)
router.delete('/removeStudent', removeStudent)
module.exports = router
