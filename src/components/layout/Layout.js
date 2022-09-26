import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Container from "./Container.js";

const styles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const Layout = ({ children }) => {
  return (
    <div style={styles}>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
