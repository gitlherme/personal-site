import { gql } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Posts, PostsProps } from "../../components/Posts";
import Title from '../../components/Title';
import { client } from '../../services/apolloClient';



export default function Blog({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Box mt="3rem">
        <Title text="Posts 📰" />
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
    },
    revalidate: 60 * 60 * 24 // every 24 hours
  }
}