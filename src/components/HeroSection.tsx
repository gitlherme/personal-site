import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Button } from "./Button";
import { CustomDivider } from "./Divider";

export function HeroSection() {
  return (
    <Flex gap={6} direction="column">
      <Text as="h1" fontSize="4xl" fontFamily="heading">HEY! 👋🏽</Text>
      <Box maxW={700}>
        <Text>
          I&apos;m Guilherme Vieira, 21. Frontend Developer based in Brazil. 🇧🇷
        </Text>
        <Text>
          Currently I work principally with Drupal at <Link color="red.400" href="https://justdigital.com.br" isExternal>@JUST</Link>. In my free time, I try to help the tech community being co-coordinator at <Link color="red.400" href="https://perifacode.com" isExternal>@perifaCode</Link> - a tech community focused on help suburb people to improve their skills and rise in tech career.
        </Text>
      </Box>
      <Button href="https://twitter.com/gitlherme">Follow me on twitter</Button>
      <CustomDivider />
    </Flex>
  )
}