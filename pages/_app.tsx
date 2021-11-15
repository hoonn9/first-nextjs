import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/main";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
