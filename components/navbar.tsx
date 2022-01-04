import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Center, Container, Flex, Wrap } from "@chakra-ui/react";
import { FC } from "react";
import LinkItem from "./link-item";
import Logo from "../public/logo.png";
import Image from "next/image";
interface Props {
  path: string;
}

const Navbar: FC<Props> = ({ children, path }) => {
  return (
    <Box as="nav" w="100%" bg={useColorModeValue("white", "black")}>
      <Container display="flex" p={2} alignItems="center" justifyContent="space-between">
        <Flex w="100%">
          <Center justifyContent="space-between" w="100%">
            <Wrap w="8" h="8">
              <Image src={Logo} alt="logo" />
            </Wrap>
            <LinkItem href="/" path={path}>
              Home
            </LinkItem>

            <LinkItem href="/movie" path={path}>
              Movies
            </LinkItem>
          </Center>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
