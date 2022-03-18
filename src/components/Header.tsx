import { Flex } from "@chakra-ui/react";
import { NavigationMenu } from "./NavigationMenu";
import { SocialMediaBlock } from "./SocialMediaBlock";

export function Header() {
  return (
    <Flex as="header" justify="space-between" h="48px" align="center">
      <NavigationMenu />
      <SocialMediaBlock />
    </Flex>
  )
}