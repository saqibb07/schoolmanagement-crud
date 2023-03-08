const courseService = require('../../services/coursesServices')
const Joi = require('joi')

const { StatusCodes } = require('http-status-codes')

const schema = Joi.object().keys({
  courseTitle: Joi.string().required(),
  creditHours: Joi.string().required(),
  courseCode: Joi.string().required(),
  labs: Joi.string().required(),
})

module.exports = async function (req, res) {
  try {
    const validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    })

    if (validate.error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        data: {},
        message: err.message,
        error: err.stack,
      })
    }

    const data = await courseService.addCourse(req.body)
    res.status(StatusCodes.OK).send({ message: 'Success', data, error: {} })
  } catch (err) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
      data: {},
      message: err.message,
      error: err.stack,
    })
  }
}
