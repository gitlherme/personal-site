import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NavigationMenu as navLinks } from "../../i18n/NavigationMenu";
import NavigationLink from "./NavigationLink";


export function NavigationMenu() {
  const { locale } = useRouter()
  const localeLinks = navLinks[locale as keyof typeof navLinks]
  return (
    <Flex as="nav" gap="4" justify="center" direction={["column", "row"]}>
      {
        localeLinks.map(({ title, link }) => {
          return (
            <NavigationLink key={title} href={link}>{title}</NavigationLink>
          )
        })
      }
    </Flex>
  )
}