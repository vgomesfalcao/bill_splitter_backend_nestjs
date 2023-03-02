import { Item } from '@prisma/client'

export class ItemEntity implements Item {
  id: number
  description: string
  createdAt: Date
  userId: number
}
