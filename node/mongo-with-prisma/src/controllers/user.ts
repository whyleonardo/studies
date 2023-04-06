import { createUser, getUsers } from './../repositories/user'
import { z } from 'zod'


const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
})

export const createUserController = async (req, res) => {

  const { name, password, email } = createUserSchema.parse(req.body)
  try {
    await createUser({ name, password, email })
    
     return res.status(200).send('User created!')
  } catch (err) {
     return res.status(400).send(err)
  }
}


export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers(req, res)
    res.status(200).send(users)
  } catch (err) {
    res.status(400).send(err)
  }
}