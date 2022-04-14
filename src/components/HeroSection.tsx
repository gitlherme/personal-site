import { Flex, Heading, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FollowMeButton } from "../../i18n/FollowMeButton"
import { Button } from "./Button"
import { CustomDivider } from "./Divider"

export interface HeroProps {
  title: string,
  content: {
    html: string
  }
}

export function HeroSection({ ...hero }: HeroProps ) {
  const { locale } = useRouter()
  const followButton = FollowMeButton[locale as keyof typeof FollowMeButton]
  return (
    <Flex gap={6} direction="column">
      <Heading as="h1" textTransform="uppercase">{hero.title}</Heading>
      <Text as="div" maxW={700} dangerouslySetInnerHTML={{ __html: hero.content.html }} />
      <Button href={followButton.link}>{followButton.title}</Button>
      <CustomDivider />
    </Flex>
  )
}
