// route.ts
import { Router } from 'express'

const router = Router()

export default function () {
  router.get('/', (req, res) => {
    res.send('Hello World')
  })

  return router
}
