import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <Flex gap={6} direction="column">
      <Text as="h1" fontSize="4xl" fontFamily="heading">HEY! 👋🏽</Text>
      <Box maxW={700}>
        <Text as="p" fontFamily="body" lineHeight="33px">
          I'm Guilherme Vieira, 21. Frontend Developer based in Brazil. 🇧🇷
        </Text>
        <Text as="p" fontFamily="body" lineHeight="33px">
          Currently I work principally with Drupal at @JUST. In my free time, I try to help the tech community being co-coordinator at @perifaCode - a tech community focused on help suburb people to improve their skills and rise in tech career.
        </Text>
      </Box>
      <Button href="https://twitter.com/gitlherme">Follow me on twitter</Button>
      <Divider colorScheme="red" />
    </Flex>
  )
}