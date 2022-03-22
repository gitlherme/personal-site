import { Link } from "@chakra-ui/react";

interface ButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export function Button({ href, target, children }: ButtonProps) {
  return (
    <Link 
      target={target ? target : '_blank'}
      href={href}
      maxW={200}
      bg="blackAlpha.700"
      p="4"
      borderRadius={8}
      textAlign="center"
      _hover={
        {
          color: 'white',
          bg: "blackAlpha.900",
          textDecoration: "none",
        }
      }
    >
      {children}  
    </Link>
  )
}