import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
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
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Rubik, sans-serif',
  },
  initialColorMode: "light",
  useSystemColorMode: true
})