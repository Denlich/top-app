import React from "react";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
