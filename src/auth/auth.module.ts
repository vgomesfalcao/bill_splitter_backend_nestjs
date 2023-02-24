import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { UserModule } from 'src/user/user.module'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
