import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { BodyContainer, Container, SidebarContainer } from "./style";

export const Sidebar = () => {
  return (
    <Container>
      <SidebarContainer>Sidebar</SidebarContainer>
      <BodyContainer>
        <Navbar />
        <Outlet />
      </BodyContainer>
    </Container>
  );
};

export default Sidebar;
