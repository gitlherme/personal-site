import { gql } from '@apollo/client'
import { Flex } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { HeroProps, HeroSection } from '../components/HeroSection'
import { client } from '../services/apolloClient'
 
export default function Home({ ...hero }: HeroProps) {
  return (
   <Flex h="calc(100vh - 48px)"  align="center">
     <Head>
      <title>Guilherme Vieira.</title>
     </Head>
     <HeroSection title={hero.title} content={hero.content} />
   </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = client.query({
    query: gql`
      {
        simpleContent(where: { id: "cl101uo3u8wbm0bknqbpci0s7" }) {
          title,
          content {
            html
          }
        }
      }
    `
  })
  
  return {
    props: (await content).data.simpleContent
  }
}