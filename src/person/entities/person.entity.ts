import { Person } from '@prisma/client'

export class PersonEntity implements Person {
  id: number
  name: string
  createdAt: Date
  userId: number
}
