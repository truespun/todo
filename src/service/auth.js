import { userDao } from '../dao/user'
import { validatePassword } from '../utils/validators'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService {
  async register (name, email, password) {
    const passwordHash = await this.createHash(password)
    try {
      return await userDao.createUser(name, email, passwordHash)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async authorizeUser (email, password) {
    const user = await userDao.findUserByEmail(email)
    if (await validatePassword(password, user.password)) {
      const token = await this.generateJWTToken(user.id, user.email)
      return { token: token, name: user.name }
    } else {
      throw new Error('Password is wrong')
    }
  }

  async createHash (string) {
    return bcrypt.hash(string, 10)
  }

  async generateJWTToken (userId, email) {
    const today = new Date()
    const expirationDate = new Date(today)
    expirationDate.setDate(today.getDate() + process.env.TOKEN_EXP_DAYS)
    return jwt.sign({
      id: userId,
      email: email,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, process.env.JWT_SECRET)
  }
}

export const authService = new AuthService()
