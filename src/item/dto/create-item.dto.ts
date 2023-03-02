import { IsNotEmpty, IsString } from 'class-validator'

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  description: string
}
