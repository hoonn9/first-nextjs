import { FC } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Router } from "next/dist/client/router";
import { Box } from "@chakra-ui/layout";
import { Button, useColorMode, Center, Img } from "@chakra-ui/react";
import Head from "../components/head";

interface Props {
  router: Router;
}

const Layout: FC<Props> = ({ children, router }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="main" minH="100vh">
      <Img
        src={colorMode === "dark" ? "/background-dark.png" : "/background-light.png"}
        pos="absolute"
        zIndex={-100}
        h="100%"
        objectFit="cover"
        opacity={0.5}
      />
      <Head />
      <Navbar path={router.asPath} />
      <div>{children}</div>
      <Footer />
      <Center pos="fixed" right="8" bottom="8">
        <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"}</Button>
      </Center>
    </Box>
  );
};

export default Layout;
