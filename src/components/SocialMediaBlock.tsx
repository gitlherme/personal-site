import { Flex, Icon, Link } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitchLine, RiTwitterLine } from 'react-icons/ri';
export function SocialMediaBlock() {
  return (
    <Flex gap="4">
      <Link href="https://github.com/githerme" isExternal>
        <Icon as={RiGithubLine} fontSize="24px" />
      </Link>
      <Link href="https://linkedin.com/in/githerme" isExternal>
        <Icon as={RiLinkedinLine} fontSize="24px" />
      </Link>
      <Link href="https://twitch.tv/githerme" isExternal>
        <Icon as={RiTwitchLine} fontSize="24px" />
      </Link>
      <Link href="https://twitter.com/githerme" isExternal>
        <Icon as={RiTwitterLine} fontSize="24px" />
      </Link>
    </Flex>
  )
}