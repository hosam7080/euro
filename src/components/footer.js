import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "1px 0",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
