import { FC } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
