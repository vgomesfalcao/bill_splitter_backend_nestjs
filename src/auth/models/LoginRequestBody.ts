import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginRequestBody {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  password: string
}
