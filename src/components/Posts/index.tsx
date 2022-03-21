
import { Heading } from '@chakra-ui/react';
import { RichTextContent } from '@graphcms/rich-text-types';
import { Button } from '../Button';


export interface PostsProps {
  posts: PostProps[]
}

export interface PostProps {
  title: string;
  slug: string;
  content: RichTextContent;
}

export function Posts({ posts }: PostsProps) {
  return (
    <div>
        {posts.map(post => {
        return (
          <div key={post.title} className="post">
            <Heading as="h2">{post.title}</Heading>
            <div dangerouslySetInnerHTML={{__html: post.content.html}} />
            <Button href={`/blog/${post.slug}`}>Read more</Button>
          </div>
        )
      })}
    </div>
  )
}
