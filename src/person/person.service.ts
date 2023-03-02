import { Injectable } from '@nestjs/common'
import { PersonRepository } from './repositories/person.repository'
import { CreatePersonDto } from './dto/create-person.dto'
import { UserEntity } from 'src/user/entities/user.entity'
import { UpdatePersonDto } from './dto/update-person.dto'

@Injectable()
export class PersonService {
  constructor(private readonly repository: PersonRepository) {}
  create(createUserDto: CreatePersonDto, currentUser: UserEntity) {
    return this.repository.create(createUserDto, currentUser)
  }

  findAll(currentUser: UserEntity) {
    return this.repository.findAll(currentUser)
  }

  update(updatePersonDto: UpdatePersonDto, id: number) {
    return this.repository.update(updatePersonDto, id)
  }

  delete(id: number) {
    return this.repository.delete(id)
  }
}
