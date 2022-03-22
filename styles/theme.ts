import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body : {
        bg: 'blackAlpha.900',
        color: 'whiteAlpha.900',
      },
      a: {
        color: "red.300"
      },
      p: {
        lineHeight: "2rem",
        margin: ".5rem 0"
      },
      pre: {
        backgroundColor: "blackAlpha.900",
        padding: "1rem",
        borderRadius: "8px",
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