import { Link } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <Link 
      target="_blank"
      href={href}
      maxW={200}
      bg="blackAlpha.700"
      p="4"
      borderRadius={8}
      textAlign="center"
      _hover={
        {
          bg: "blackAlpha.900",
          textDecoration: "none",
        }
      }
    >
      {children}  
    </Link>
  )
}