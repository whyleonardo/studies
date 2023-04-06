import express from 'express'
import cors from 'cors'
import { routes } from './routes/index'

const app = express()

app.use(cors())
app.use(express.json())
routes(app)

app.listen(3000, () => {
  console.log('Server is running on port 3000! 🚀')
})


