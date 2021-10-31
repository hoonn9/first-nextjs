import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // console.log("pageProps", pageProps, Component);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
