import React from "react";
import { useLocation } from "react-router-dom";
import { Arrow, Container } from "./style";

export const Header = (props: {
  parent: string;
  title: string;
  path: string;
}) => {
  const location = useLocation();
  const color = (key: string): { bg: string; btn: string } => {
    switch (key) {
      case "/sozlamalar":
        return { bg: "#FFF2E8", btn: "#FA8C16" };
      case "/statistika":
        return { bg: "#FFF2E8", btn: "#FA8C16" };
      case "/hr":
        return { bg: "#FFF0F6", btn: "#EB2F96" };
      case "/kurslar":
        return { bg: "#E6FFFB", btn: "#13C2C2" };
      case "/guruhlar":
        return { bg: "#FCFFE6", btn: "#A0D911" };
      case "/talaba":
        return { bg: "#F9F0FF", btn: "#722ED1" };
      case "/moliya":
        return { bg: "#F9F0FF", btn: "#722ED1" };
      case "/lids":
        return { bg: "#F0F5FF", btn: "#1890FF" };
      default:
        return { bg: "#FFF2E8", btn: "#FA8C16" };
    }
  };

  return (
    <Container color={color(location?.pathname)}>
      {props.parent} {props.title && <Arrow />} {props.title}
    </Container>
  );
};

export default Header;
