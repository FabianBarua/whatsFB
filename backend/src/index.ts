import express from 'express'
import { config } from 'dotenv'
import routes from './routes/index'
config()

const app = express()
const port = process.env.BACK_PORT || 5000

app.use('/', routes())

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
