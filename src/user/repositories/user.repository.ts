import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { UserEntity } from '../entities/user.entity'

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: createUserDto,
    })
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } })
  }
}
