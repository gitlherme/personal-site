import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Flex direction="column" mt="3rem">
        <Heading as="h1" mb="3rem">ABOUT ME 🥳</Heading>
        <VStack gap="20px" fontSize="18px">
          <Text>
            I was born in São Paulo, Brazil. Since my childhood I has access to computer because my parents has a lan house. I knew HTML around the 2010s decade, when I created a blog to share my experiences with Club Penguin. Games are my hobbie since early and in 2015 I entered in a technical course focused in programming to develop skills to create my own games. In this course, I has my first contact with others languages focused in frontend development, like CSS and Javascript, and I discovered a great afinity with these skills.
          </Text>
          <Text>
            After my high school, I started my studies at Impacta - a university focused in technology based in Brazil - in Analysis and Development Systems. I started to go in many hackathons to increase my hard and soft skills, and in August, 2018, I entered in a internship at Prefeitura de São Paulo.
          </Text>
          <Text>
            Today I&apos;m MBA in Full Stack Development by IGTI and work with frontend development at JUST Digital, using technologies like HTML, CSS, Javascript, Drupal, and Acquia Site Studio. Currently, I&apos;m learning about React and Next, GraphQL, Vue and Nuxt and Typescript.
          </Text>
        </VStack>
      </Flex>
    </>
  )
}