import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import Header from "./components/Header";

const Layout = props => {
  const [isLightTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevBool => !prevBool);
  };
  return (
    <Container fluid>
      <Row>
        <Header toggleTheme={toggleTheme} />
      </Row>
      <Row className="App">
        <div
          className={`app-body fullWidth ${
            isLightTheme ? "light-theme" : "dark-theme"
          }`}
        >
          {props.children}
        </div>
      </Row>
    </Container>
  );
};

export default Layout;
