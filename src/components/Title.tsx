import { Heading } from "@chakra-ui/react";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <Heading as="h1" mt="3rem" mb="3rem" textTransform="uppercase">{text}</Heading>
  )
}