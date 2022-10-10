import express from 'express'

import { logIncomingRequest } from './middleware/log-incoming-request.js'

const server = express()

server.use(express.json())
server.use(logIncomingRequest())

server.use('*', (_, res) => {
  res.json({ success: true })
})

export { server }
