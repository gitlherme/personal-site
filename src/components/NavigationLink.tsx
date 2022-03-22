import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";


interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({ href, children }: NavigationLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink color="whiteAlpha.900" _hover={
        {
          color: 'red.300',
          textDecoration: "none",
        }
      }>
        {children}
      </ChakraLink>
    </Link>
  )
}