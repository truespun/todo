import { todoService } from '../service/todo'

class ToDoController {
  async createTodo (todo, userId) {
    return todoService.createTodo(todo, userId)
  }

  async getTodoPerPage (userId,page) {
    return todoService.getTodoPerPage(userId,page)
  }

  async updateTodo (todoId, text) {
    return todoService.updateTodo(todoId, text)
  }

  async deleteTodo (todoId) {
    return todoService.deleteTodo(todoId)
  }

  async completeTodo (todoId) {
    return todoService.completeTodo(todoId)
  }
}

export const todoController = new ToDoController()
