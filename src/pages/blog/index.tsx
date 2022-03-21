import { gql } from '@apollo/client';
import { Box, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Posts, PostsProps } from "../../components/Posts";
import { client } from '../../services/apolloClient';



export default function Blog({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Box mt="3rem">
        <Heading as="h1" mb="3rem">POSTS 📰</Heading>
        <Posts posts={posts}/>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = client.query({
    query: gql`
      {
        posts {
          title,
          slug,
          description,
          content {
            html
          }
        }
      }
    `
  })
  return {
    props: {
      posts: (await posts).data.posts
    }
  }
}