import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ItemService } from './item.service'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UserEntity } from 'src/user/entities/user.entity'

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(
    @Body() createItemDto: CreateItemDto,
    @CurrentUser() currentUser: UserEntity,
  ) {
    return this.itemService.create(createItemDto, currentUser)
  }

  @Get()
  findAll(@CurrentUser() currentUser: UserEntity) {
    return this.itemService.findAll(currentUser)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
    @CurrentUser() currentUser: UserEntity,
  ) {
    return this.itemService.update(+id, updateItemDto, currentUser)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id)
  }
}
