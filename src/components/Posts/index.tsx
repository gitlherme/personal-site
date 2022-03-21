
import { Flex, Heading, Text } from '@chakra-ui/react';
import { RichTextProps } from '@graphcms/rich-text-types';
import { Button } from '../Button';


export interface PostsProps {
  posts: PostProps[]
}

export interface PostProps extends RichTextProps {
  title: string;
  slug: string;
  description: string
}

export function Posts({ posts }: PostsProps) {
  return (
    <Flex gap="4">
      {
        posts.length ? posts.map(post => {
          return (
            <Flex key={post.title} direction="column" gap="2" maxW="50%" bg="blackAlpha.300" p="6" borderRadius={8}>
              <Heading as="h2" fontSize={22}>{post.title}</Heading>
              <Text>{post.description}</Text>
              <Button href={`/blog/${post.slug}`}>Read more</Button>
            </Flex>
          )
        }) : <Heading as="h2">Not found posts</Heading>
      }
    </Flex>
  )
}
