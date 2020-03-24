import express from 'express'
import { auth } from '../middleware/auth'
import { todoController } from '../../controller/todo'

const router = express.Router()

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

router.get('/:page', auth.required, wrapAsync(async (req, res) => {
  return res.json(await todoController.getTodoPerPage(req.payload.id, req.params.page))
}))

router.post('/', auth.required, wrapAsync(async (req, res) => {
  return res.json(await todoController.createTodo(req.body, req.payload.id))
}))

router.put('/:id', auth.required, wrapAsync(async (req, res) => {
  return res.json(await todoController.updateTodo(req.params.id, req.body.text))
}))

router.put('/:id/complete', auth.required, wrapAsync(async (req, res) => {
  return res.json(await todoController.completeTodo(req.params.id))
}))

router.delete('/:id', auth.required, wrapAsync(async (req, res) => {
  return res.json(await todoController.deleteTodo(req.params.id))
}))

module.exports = router
