import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export function NavigationMenu() {
  return (
    <Flex as="nav" gap="4" justify="center">
      <ChakraLink>
        <Link href="/">Home</Link>
      </ChakraLink>
      <ChakraLink>
        <Link href="/about">About me</Link>
      </ChakraLink>
      <ChakraLink>
        <Link href="/about">Blog</Link>
      </ChakraLink>
    </Flex>
  )
}