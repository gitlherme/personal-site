import { Icon, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
      <Icon fontSize="24px" 
        as={colorMode === "light" ? RiMoonLine : RiSunLine}
        onClick={toggleColorMode}
        _hover={{ cursor: "pointer" }}
      />
  )
}