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
const { addCourse, removeCourse, updateCourse, getCourse } = require('../Controller/index')
router.post('/createCourse', addCourse)
router.get('/getCourse', getCourse)
router.get('/allCourse', authenticateToken, getCourse)
router.put('/updateCourse', updateCourse)
router.delete('/removeCourse', removeCourse)
module.exports = router
