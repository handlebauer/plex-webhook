import express from 'express'
import bodyParser from 'body-parser'
// import { logIncomingRequest } from './middleware/log-incoming-request.js'

const server = express()

server.use(
  bodyParser.raw({ inflate: true, limit: '100kb', type: 'multipart/form-data' })
)
// server.use(express.json())
// server.use(logIncomingRequest())

server.use('*', (req, res) => {
  console.log(new TextDecoder('utf-8').decode(req.body))
  res.json({ success: true })
})

export { server }
