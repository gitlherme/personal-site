import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HeroSection } from '../components/HeroSection'
 
const Home: NextPage = () => {
  return (
   <Flex h="calc(100vh - 48px)"  align="center">
     <Head>
      <title>Guilherme Vieira.</title>
     </Head>
     <HeroSection />
   </Flex>
  )
}

export default Home
