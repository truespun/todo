import express from 'express'

const router = express.Router()

router.use('/auth', require('./routes/auth'))
router.use('/todo', require('./routes/todo'))

module.exports = router
