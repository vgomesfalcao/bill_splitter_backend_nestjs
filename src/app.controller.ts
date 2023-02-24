import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { CurrentUser } from './auth/decorators/current-user.decorator'
import { UserEntity } from './user/entities/user.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello()
  }

  @Get('me')
  getMe(@CurrentUser() user: UserEntity) {
    return user
  }
}
