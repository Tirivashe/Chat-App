import express, { Application } from 'express'
import { Server } from "socket.io"
import config from 'config'
import { createServer } from 'http'
import logger from './utils/logger'

const app: Application = express()
const port = config.get<number>('port')
const host = config.get<string>('host')
const corsOrigin =  config.get<string>('corsOrigin')


//an http server needs to be created. It is one of the arguments specifically needed to create a socket server
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    credentials: true,
  }
})


httpServer.listen(port, host, () => { logger.info("🚀 Server is running 🚀")})