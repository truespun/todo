import { todoDao } from '../dao/todo'

class ToDoService {
  async createTodo (todo, userId) {
    return todoDao.createTodo(todo, userId)
  }

  async getTodoPerPage (userId, page) {
    return todoDao.getTodoPerPage(userId, page)
  }

  async updateTodo (todoId, text) {
    return todoDao.updateTodo(todoId, text)
  }

  async deleteTodo (todoId) {
    return todoDao.deleteTodo(todoId)
  }

  async completeTodo (todoId) {
    return todoDao.completeTodo(todoId)
  }
}

export const todoService = new ToDoService()
