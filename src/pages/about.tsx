import { gql } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Title from "../components/Title";
import { client } from "../services/apolloClient";

export interface AboutProps {
  title: string;
  content: {
    html: string;
  }
}

export default function About({ title, content }: AboutProps) {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Flex direction="column" >
        <Title text={title} />
        <Text fontSize="18px" dangerouslySetInnerHTML={{ __html: content.html }}  />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = client.query({
    query: gql`
      {
        simpleContent(where: { id: "cl10tl1xl05n80bkf6yve4nvh" }) {
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