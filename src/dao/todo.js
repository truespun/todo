import Todo from '../models/todo'

class TodoDao {
  async createTodo (todo, userId) {
    return Todo.create({
      text: todo.text,
      completed: false,
      creator: userId
    })
  }

  async getTodoPerPage (userId,page) {
    return Todo.find({ creator: userId }).sort({createdAt: 'DESC'}).limit(10).skip(page * 10)
  }

  async updateTodo (todoId, text) {
    return Todo.findByIdAndUpdate(todoId, { text: text })
  }

  async deleteTodo (todoId) {
    return Todo.remove({ _id: todoId })
  }

  async completeTodo (todoId) {
    return Todo.findByIdAndUpdate(todoId, { completed: true })
  }
}

export const todoDao = new TodoDao()
