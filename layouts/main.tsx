import { FC } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Router } from "next/dist/client/router";
import { Box } from "@chakra-ui/layout";
import { Button, useColorMode, Center } from "@chakra-ui/react";
import Head from "../components/head";

interface Props {
  router: Router;
}

const Layout: FC<Props> = ({ children, router }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="main">
      <Head />
      <Navbar path={router.asPath} />
      <main>{children}</main>
      <Footer />
      <Center pos="fixed" right="8" bottom="8">
        <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"}</Button>
      </Center>
    </Box>
  );
};

export default Layout;
