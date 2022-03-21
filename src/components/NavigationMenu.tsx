import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export function NavigationMenu() {
  return (
    <Flex as="nav" gap="4" justify="center">
      <Link href="/">Home</Link>
      <Link href="/about">About me</Link>
      <Link href="/blog">Blog</Link>
    </Flex>
  )
}