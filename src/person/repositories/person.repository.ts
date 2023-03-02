import { PrismaService } from 'src/prisma/prisma.service'
import { CreatePersonDto } from '../dto/create-person.dto'
import { UserEntity } from 'src/user/entities/user.entity'
import { Injectable } from '@nestjs/common'
import { UpdatePersonDto } from '../dto/update-person.dto'

@Injectable()
export class PersonRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPersonDto: CreatePersonDto, currentUser: UserEntity) {
    return await this.prisma.person.create({
      data: {
        name: createPersonDto.name,
        userId: currentUser.id,
      },
    })
  }

  async findAll(currentUser: UserEntity) {
    return await this.prisma.person.findMany({
      where: { userId: currentUser.id },
    })
  }

  async update(updatePersonDto: UpdatePersonDto, id: number) {
    return await this.prisma.person.update({
      data: updatePersonDto,
      where: { id },
    })
  }

  async delete(id: number) {
    return await this.prisma.person.delete({
      where: { id },
    })
  }
}
