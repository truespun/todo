import express from 'express'
import { authController } from '../../controller/auth'
import { user as userSchema } from '../../controller/schema/user'
import { validate } from '../../utils/validators'

const router = express.Router()

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

router.post('/register', validate(userSchema), wrapAsync(async (req, res) => {
  return res.json(await authController.register(req.body))
}))

router.post('/login', wrapAsync(async (req, res) => {
  return res.json(await authController.login(req.body))
}))

module.exports = router
