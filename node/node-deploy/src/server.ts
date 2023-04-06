import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return {users}
})

app.post('/users', async (req, reply) => {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email()
  })

  const { name, email } = createUserSchema.parse(req.body)


  const isEmailAlreadyExists = await prisma.user.findMany({
    where: {
      email: email
    }
  })

  if (isEmailAlreadyExists.length === 0) {
    await prisma.user.create({
      data: {
        name,
        email
      }
    })

  return reply.status(201).send()

  } else {
    return reply.status(401).send('Email already exists! Try another.')
  }
 
})

app.listen({
  host: '0.0.0.0',
  port: 3333
})
  .then(() => console.log('Server is Running!'))
