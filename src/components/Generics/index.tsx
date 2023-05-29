import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import { Container } from "./style";

export const Generics = (props: any) => {
  const location = useLocation();
  return (
    <Container>
      <Header
        parent={location?.state?.parent}
        title={location?.state?.title}
        path={location?.state?.path}
      />
    </Container>
  );
};

export default Generics;
