import { PrismaService } from 'src/prisma/prisma.service'
import { CreateItemDto } from '../dto/create-item.dto'
import { UserEntity } from 'src/user/entities/user.entity'
import { UpdateItemDto } from '../dto/update-item.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto, currentUser: UserEntity) {
    return await this.prisma.item.create({
      data: {
        description: createItemDto.description,
        userId: currentUser.id,
      },
    })
  }

  async findAll(currentUser: UserEntity) {
    return await this.prisma.item.findMany({
      where: { userId: currentUser.id },
    })
  }

  async findOne(id: number) {
    return await this.prisma.item.findUnique({
      where: { id },
    })
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    return await this.prisma.item.update({
      data: updateItemDto,
      where: { id },
    })
  }

  async delete(id: number) {
    return await this.prisma.item.delete({
      where: { id },
    })
  }
}
