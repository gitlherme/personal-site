import { Flex, Icon, Link } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitchLine, RiTwitterLine } from 'react-icons/ri';
export function SocialMediaBlock() {
  return (
    <Flex gap="4">
      <Link href="https://github.com/gitlherme" isExternal>
        <Icon as={RiGithubLine} fontSize="24px" />
      </Link>
      <Link href="https://linkedin.com/in/gitlherme" isExternal>
        <Icon as={RiLinkedinLine} fontSize="24px" />
      </Link>
      <Link href="https://twitch.tv/gitlherme" isExternal>
        <Icon as={RiTwitchLine} fontSize="24px" />
      </Link>
      <Link href="https://twitter.com/gitlherme" isExternal>
        <Icon as={RiTwitterLine} fontSize="24px" />
      </Link>
    </Flex>
  )
}