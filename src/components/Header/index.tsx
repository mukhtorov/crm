import React from "react";
import { Arrow, Container } from "./style";

export const Header = (props: {
  parent: string;
  title: string;
  path: string;
}) => {
  const color = () => {
    const colors = {
      "/sozlamalar": { bg: "#FFF2E8", btn: "#FA8C16" },
      "/hr": { bg: "#FFF0F6", btn: "#EB2F96" },
      "/kurslar": { bg: "#E6FFFB", btn: "#13C2C2" },
      "/guruhlar": { bg: "#FCFFE6", btn: "#A0D911" },
      "/talaba": { bg: "#F9F0FF", btn: "#722ED1" },
      "/moliya": { bg: "#F9F0FF", btn: "#722ED1" },
      "/lids": { bg: "#F0F5FF", btn: "#1890FF" },
    };
    // return colors[props.path];
  };

  return (
    <Container color={color}>
      {props.parent} {props.title && <Arrow />} {props.title}
    </Container>
  );
};

export default Header;
