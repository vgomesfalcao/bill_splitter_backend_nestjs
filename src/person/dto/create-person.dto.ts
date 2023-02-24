import { IsNotEmpty, IsString } from 'class-validator'

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  name: string
}
