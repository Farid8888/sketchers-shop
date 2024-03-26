import React from "react";
import Navigation from "../Navigation/Navigation";
import SubNav from "../Navigation/SubNav";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <SubNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
