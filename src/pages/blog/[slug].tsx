import { gql } from "@apollo/client";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import styles from '../../../styles/Post.module.scss';
import { client } from "../../services/apolloClient";


export interface PostProps {
  post: {
    title: string;
    slug: string;
    description: string;
    content: {
      html: string
    }
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Flex mt="3rem" direction="column" gap="4" mb={24} className={styles.post}>
        <Heading as="h1">{post.title}</Heading>
        <Text gap="2" as="article" dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const post = client.query({
    query: gql`
      {
        post(
          where: {slug: "${params?.slug}"}
        ) {
          title
          content {
            html
          }
        }
      }
    `
  })
  return {
    props: { ...(await post).data },
    revalidate: 60 * 60 * 24 // every 24 hours
  }
}