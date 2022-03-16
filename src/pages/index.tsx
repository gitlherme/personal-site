import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HeroSection } from '../components/HeroSection'
 
const Home: NextPage = () => {
  return (
   <Flex maxW={900} h="100vh" justify="center" align="center">
     <HeroSection />
   </Flex>
  )
}

export default Home
