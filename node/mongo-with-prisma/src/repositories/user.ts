import { prisma } from '../services/prisma'

type User = {
  email: string
  name: string
  password: string
}

export const createUser = async (data: User) => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    }
  })
}

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany({})
  
  return users
}