import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'
 
const Home: NextPage = () => {
  return (
   <Flex maxW={900} h="100vh" justify="center" align="center">
     <Header />
   </Flex>
  )
}

export default Home
