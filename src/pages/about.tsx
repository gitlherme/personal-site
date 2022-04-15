import { gql } from "@apollo/client";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { CustomDivider } from "../components/Divider";
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
      <Flex direction="column">
        <Title text={title} />
        <Text as="div" fontSize="18px" dangerouslySetInnerHTML={{ __html: content.html }}  />
      </Flex>
      <Stack mt="5rem">
        <CustomDivider />
      </Stack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale === 'en-US' ? 'en' : 'pt_br'
  const content = client.query({
    query: gql`
      {
        simpleContent(where: { id: "cl10tl1xl05n80bkf6yve4nvh" }, locales: ${locale}) {
          title,
          content {
            html
          }
        }
      }
    `
  })
  
  return {
    props: (await content).data.simpleContent,
    revalidate: 60 * 60 * 24 // every 24 hours
  }
}