import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} page Coming Soon...</h1>
    </Container>
  );
};

export default Generics;
