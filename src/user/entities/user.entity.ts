import { User } from '@prisma/client'

export class UserEntity implements User {
  id: number
  password: string
  email: string
  name: string
  admin: boolean
  createdAt: Date
}
