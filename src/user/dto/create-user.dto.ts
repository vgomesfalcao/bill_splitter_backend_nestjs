import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsBoolean()
  admin: boolean
}
