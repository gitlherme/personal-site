import { Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Flag from "react-flagkit";

export function Flags() {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <Flex gap=".5rem" align="center">
      <Link href={`/pt-BR${pathname}`}>
        <Flag country="BR" />
      </Link>
      <Link href={`/en-US${pathname}`}>
        <Flag country="US" />
      </Link>
    </Flex>
  )
}