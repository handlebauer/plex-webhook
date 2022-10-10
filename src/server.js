import express from 'express'
import multer from 'multer'

// import { logIncomingRequest } from './middleware/log-incoming-request.js'

const server = express()

// server.use(express.json())
// server.use(logIncomingRequest())

server.use('*', multer().none(), (req, res) => {
  console.log(req.body)
  res.json({ success: true })
})

export { server }
