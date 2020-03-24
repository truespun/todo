import Joi from '@hapi/joi'

const user = Joi.object().keys({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/
  ).required()
})

export { user }
