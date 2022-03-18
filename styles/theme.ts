import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body : {
        bg: 'blackAlpha.900',
        color: 'whiteAlpha.900',
      },
      a: {
        _hover: {
          color: "red.300",
          textDecoration: "none"
        }
      },
      p: {
        lineHeight: "32px"
      }
    }
  },
  colors: {
    brand: {
      400: "red.400",
    }
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Rubik, sans-serif',
  },
})