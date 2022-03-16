import { Flex, Icon } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitchLine, RiTwitterLine } from 'react-icons/ri'
export function SocialMediaBlock() {
  return (
    <Flex gap="4">
      <Icon as={RiGithubLine} fontSize="24px" />
      <Icon as={RiLinkedinLine} fontSize="24px" />
      <Icon as={RiTwitchLine} fontSize="24px" />
      <Icon as={RiTwitterLine} fontSize="24px" />
    </Flex>
  )
}