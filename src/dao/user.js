import User from '../models/user'

class UserDao {
  async createUser (name, email, password) {
    return User.create({
      name,
      email,
      password
    })
  }

  async findUserByEmail (email) {
    try {
      return await User.findOne({ email: email })
    } catch (e) {
      throw new Error(`${e}`)
    }
  }
}

export const userDao = new UserDao()
