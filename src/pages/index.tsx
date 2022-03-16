import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HeroSection } from '../components/HeroSection'
 
const Home: NextPage = () => {
  return (
   <Flex h="100vh" align="center">
     <HeroSection />
   </Flex>
  )
}

export default Home
