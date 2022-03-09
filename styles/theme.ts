import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Rubik, sans-serif',
  },
  styles: {
    global: {
      body : {
        bg: 'blackAlpha.900',
        color: 'whiteAlpha.900',
      }
    }
  }
})