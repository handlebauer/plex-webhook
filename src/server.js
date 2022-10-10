import express from 'express'

import { logIncomingRequest } from './middleware/log-incoming-request.js'

const server = express()

server.use(express.json())
server.use(logIncomingRequest())

server.post('/plex/webhook', (req, res) => {
  res.json({ success: true })
})

server.use('*', (_, res) => {
  res.json({ 404: true })
})

export { server }
