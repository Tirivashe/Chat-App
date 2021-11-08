import io from 'socket.io-client'
import { createContext, useContext } from 'react'
import { SOCKET_URL } from '../config/default'

const socket = io(SOCKET_URL)

const SocketContext = createContext({ socket })

export const useSockets = () => useContext(SocketContext)

function SocketProvider({ children }: any){
  return (
    <SocketContext.Provider value={{ socket }}>
    {children}
  </SocketContext.Provider>
  )
}

export default SocketProvider