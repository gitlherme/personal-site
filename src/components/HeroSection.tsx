import { Flex, Heading, Text } from "@chakra-ui/react"
import { Button } from "./Button"
import { CustomDivider } from "./Divider"

export interface HeroProps {
  title: string,
  content: {
    html: string
  }
}

export function HeroSection({ ...hero }: HeroProps ) {
  return (
    <Flex gap={6} direction="column">
      <Heading as="h1" textTransform="uppercase">{hero.title}</Heading>
      <Text maxW={700} dangerouslySetInnerHTML={{ __html: hero.content.html }} />
      <Button href="https://github.com/gitlherme">Follow me on Github</Button>
      <CustomDivider />
    </Flex>
  )
}
