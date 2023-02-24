import { Module } from '@nestjs/common'
import { PersonService } from './person.service'
import { PersonController } from './person.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PersonRepository } from './repositories/person.repository'

@Module({
  imports: [PrismaModule],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
})
export class PersonModule {}
