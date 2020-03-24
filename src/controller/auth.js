import { authService } from '../service/auth'

class AuthController {
  async register (user) {
    return authService.register(user.name, user.email, user.password)
  }

  async login (data) {
    return authService.authorizeUser(data.email, data.password)
  }
}

export const authController = new AuthController()
