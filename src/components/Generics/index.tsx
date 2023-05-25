import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import { Container } from "./style";

export const Generics = (props: any) => {
  const location = useLocation();
  const { parent, title, path } = location.state;
  return (
    <Container>
      <Header parent={parent} title={title} path={path} />
      <h1>{location.pathname} page Coming Soon...</h1>
    </Container>
  );
};

export default Generics;
