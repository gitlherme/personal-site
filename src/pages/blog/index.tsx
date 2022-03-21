import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Posts, PostsProps } from "../../components/Posts";

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl0zzhq9u5aoc01z3d6hz6geb/master',
  cache: new InMemoryCache()
})


export default function Blog({posts}: PostsProps) {
  return (
    <Posts posts={posts}/>
  )
}

export async function getStaticProps() {
  const posts = client.query({
    query: gql`
      {
        posts {
          title,
          slug,
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