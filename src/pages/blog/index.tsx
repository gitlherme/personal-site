import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Box, Heading } from '@chakra-ui/react';
import { Posts, PostsProps } from "../../components/Posts";

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl0zzhq9u5aoc01z3d6hz6geb/master',
  cache: new InMemoryCache()
})


export default function Blog({posts}: PostsProps) {
  return (
    <Box mt="3rem">
      <Heading as="h1" mb="3rem">POSTS 📰</Heading>
      <Posts posts={posts}/>
    </Box>
  )
}

export async function getStaticProps() {
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