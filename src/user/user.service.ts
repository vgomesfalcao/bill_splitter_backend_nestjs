import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import * as bcrypt from 'bcrypt'
import { UserRepository } from './repositories/user.repository'

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10)
    const data = await this.repository.create(createUserDto)
    data.password = undefined
    return data
  }

  async findAll() {
    const data = await this.repository.findAll()
    for (const item of data) {
      item.password = undefined
    }
    return data
  }

  async findOne(id: number) {
    const data = await this.repository.findOne(id)
    data.password = undefined
    return data
  }

  async findByEmail(email: string) {
    const data = await this.repository.findByEmail(email)

    data.password = undefined

    return data
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = await this.repository.update(id, updateUserDto)
    data.password = undefined
    return data
  }

  async remove(id: number) {
    const data = await this.repository.remove(id)
    data.password = undefined
    return data
  }
}
