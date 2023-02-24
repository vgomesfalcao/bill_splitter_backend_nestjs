import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { PersonService } from './person.service'
import { CreatePersonDto } from './dto/create-person.dto'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UserEntity } from 'src/user/entities/user.entity'
import { UpdatePersonDto } from './dto/update-person.dto'

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Post()
  create(
    @Body() createUserDto: CreatePersonDto,
    @CurrentUser() currentUser: UserEntity,
  ) {
    return this.personService.create(createUserDto, currentUser)
  }

  @Get()
  findAll(@CurrentUser() currentUser: UserEntity) {
    return this.personService.findAll(currentUser)
  }

  @Patch(':id')
  update(@Body() updatePersonDto: UpdatePersonDto, @Param('id') id: string) {
    return this.personService.update(updatePersonDto, +id)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personService.delete(+id)
  }
}
