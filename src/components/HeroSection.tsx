import { Flex, Text } from "@chakra-ui/react";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <Flex gap={6} direction="column">
      <Text as="h1" fontSize="4xl" fontFamily="heading">HEY! 👋🏽</Text>
      <Text as="p" fontFamily="body" maxW={480}>
        I&apos;m Guilherme Vieira - a frontend developer based in São Paulo, Brazil 🇧🇷. Currently working at Just Digital, building sites using HTML, CSS, Javascript, Drupal and Acquia Site Studio.  
      </Text>
      <Button href="https://twitter.com/gitlherme">Follow me on twitter</Button>
    </Flex>
  )
}