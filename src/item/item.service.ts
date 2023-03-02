import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'
import { ItemRepository } from './repositories/item.repository'
import { UserEntity } from 'src/user/entities/user.entity'

@Injectable()
export class ItemService {
  constructor(private readonly repository: ItemRepository) {}
  create(createItemDto: CreateItemDto, currentUser: UserEntity) {
    return this.repository.create(createItemDto, currentUser)
  }

  findAll(currentUser: UserEntity) {
    return this.repository.findAll(currentUser)
  }

  async update(
    id: number,
    updateItemDto: UpdateItemDto,
    currentUser: UserEntity,
  ) {
    const response = await this.repository.findOne(id)
    if (response && response.userId === currentUser.id) {
      return this.repository.update(id, updateItemDto)
    } else {
      throw new NotFoundException('Id não encontrado')
    }
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
