import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl0zzhq9u5aoc01z3d6hz6geb/master',
  cache: new InMemoryCache()
})