import { Module } from '@nestjs/common'
import { ItemService } from './item.service'
import { ItemController } from './item.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ItemRepository } from './repositories/item.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ItemController],
  providers: [ItemService, ItemRepository],
})
export class ItemModule {}
