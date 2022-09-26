import React from "react";

import Container from "./Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes["footer-content"]}>
          <p>Copyright &copy; 2022 by Shop</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
