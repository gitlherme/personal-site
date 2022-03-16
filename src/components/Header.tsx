import { Flex } from "@chakra-ui/react";
import { NavigationMenu } from "./NavigationMenu";
import { SocialMediaBlock } from "./SocialMediaBlock";

export function Header() {
  return (
    <Flex as="header" justify="space-between" pt="6" pb="6" align="center">
      <NavigationMenu />
      <SocialMediaBlock />
    </Flex>
  )
}