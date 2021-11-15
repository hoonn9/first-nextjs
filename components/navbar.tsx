import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Container, Flex, Link, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import NextLink from "next/link";
import LinkItem from "./link-item";
import { Router } from "next/dist/client/router";

interface Props {
  path: string;
}

const Navbar: FC<Props> = ({ children, path }) => {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
    >
      <Container
        display="flex"
        p={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack>
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
        </Stack>
        <Stack>
          <LinkItem href="/movie" path={path}>
            Movies
          </LinkItem>
        </Stack>
        <Stack></Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
