import { Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import Link from "next/link";


interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({ href, children }: NavigationLinkProps) {
  const { colorMode } = useColorMode()
  const color = colorMode === "light" ? "black" : "white";
  return (
    <Link href={href} passHref>
      <ChakraLink _hover={
        {
          color: color,
          textDecoration: "none",
        }
      }>
        {children}
      </ChakraLink>
    </Link>
  )
}