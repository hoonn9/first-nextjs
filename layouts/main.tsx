import { FC } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import { Router } from "next/dist/client/router";
import { Box } from "@chakra-ui/layout";

interface Props {
  router: Router;
}

const Layout: FC<Props> = ({ children, router }) => {
  return (
    <Box as="main">
      <Header />
      <Navbar path={router.asPath} />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
