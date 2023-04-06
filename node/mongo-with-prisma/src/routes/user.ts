import { createUserController, getUsersController } from "../controllers/user"

export const userRoutes = (app) => {
  app.post('/createUser', createUserController)
  app.get('/users', getUsersController)
}

