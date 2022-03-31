import { Flex } from "@chakra-ui/react";
import NavigationLink from "./NavigationLink";

export function NavigationMenu() {
  return (
    <Flex as="nav" gap="4" justify="center">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About me</NavigationLink>
      <NavigationLink href="/blog">Blog</NavigationLink>
    </Flex>
  )
}