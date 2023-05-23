import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import { ReactComponent as arrow } from "../../assets/icons/rightArrow.svg";

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  padding: 10px 0;
  box-shadow: 0px 8px 8px #f5f6f8;
  display: flex;
  flex-direction: column;
  .active {
    color: #1890ff;
    & path {
      fill: #1890ff;
    }
  }
`;

interface Props {
  open?: boolean;
  title?: any;
}

export const Logo = styled.h1<Props>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  justify-content: center;

  align-items: center;
  min-width: ${({ title }) => !title && "65px"};
  padding-left: ${({ title }) => title && "15px"};
  color: ${(props) => (props.title ? "#1890ff" : "white")};

  height: 65px;
  border-bottom: 1px solid #f8fafc;
  display: ${(props) => props.open && "none"};
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  flex: 1;
  border: 1px solid blue;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #253e5f;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-decoration: none;
  width: 100%;
  padding: 12px 30px 12px 25px;
`;

interface ButtonProp {
  key?: any;
  component?: string;
}

export const LinkButton = styled(ListItemButton)<ButtonProp>`
  padding: 0 !important;
`;

export const NavlinkArrow = styled(arrow)`
  margin-left: auto;
`;

export const ParentLink = styled.div<any>`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #253e5f;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-decoration: none;
  width: 100%;
  /* padding: 12px 30px 12px 25px; */
  padding-left: 25px;
  .active {
    color: #1890ff;
    & path {
      fill: #1890ff;
    }
  }
`;
