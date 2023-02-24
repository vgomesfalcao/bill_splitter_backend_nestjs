import { Injectable } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  login() {
    throw new Error('Method not implemented.')
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email)
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (isPasswordValid) {
        return { ...user, password: undefined }
      }
    }
    throw new Error('User or password incorrect')
  }
}
