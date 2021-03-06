import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSockets } from '../context/socket.context'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { socket } = useSockets()
  return (
    <div>
      {socket.id}
    </div>
  )
}

export default Home
