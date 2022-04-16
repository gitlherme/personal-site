import { Box, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Flags } from "./Flags";
import { NavigationMenu } from "./NavigationMenu";
import { SocialMediaBlock } from "./SocialMediaBlock";
import { ToggleColorMode } from "./ToggleColorMode";

export function Header() {
  return (
    <Box>
      <Flex justify="space-between" py="0.5rem" display={["flex", "none"]}>
        <SocialMediaBlock />
        <Flex gap="2rem">
          <ToggleColorMode />
          <Menu>
            <MenuButton as="button">
              <Icon as={RiMenuLine} fontSize="24px" />
            </MenuButton>
            <MenuList
              w="100vw"
              h="30vh"
              bg="black"
              border="none"
              borderRadius="none"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }}>
                <NavigationMenu />
              </MenuItem>
              <MenuItem _hover={{ bg: "transparent" }} _focus={{ bg: "transparent" }}
                w="100%"
                display="flex"
                justifyContent="center"
              >
                <Flags />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex h="48px" justify="space-between" py="0.5rem" display={["none", "flex"]} align="center">
        <NavigationMenu />
        <Flex gap="2rem">
          <SocialMediaBlock />
          <ToggleColorMode />
          <Flags />
        </Flex>
      </Flex>
    </Box>
  )
}