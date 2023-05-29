import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import { ReactComponent as arrow } from "../../assets/icons/rightArrow.svg";

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  padding: 10px 0 0 0;
  box-shadow: 0px 8px 8px #f5f6f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start
  height: 100vh;
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
  color: #1890ff;
  /* color: ${(props) => (props.title ? "#1890ff" : "white")}; */

  height: 65px;
  border-bottom: 1px solid #f8fafc;
  /* display: ${(props) => props.open && "none"}; */
  opacity: ${(props) => props.open && 0};
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  flex: 1;
  border: 1px solid blue;
`;

export const Link = styled(NavLink)<{ className?: string }>`
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
  parent?: string;
}

export const LinkButton = styled(ListItemButton)<ButtonProp>`
  padding: 0 !important;
  background: ${({ parent }) => parent && "white !important"};
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

export const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  min-width: 21px;
  min-height: 21px;
  border: 1px solid #1890ff;
  border-radius: 50%;
  user-select: none;
  color: #1890ff;
`;

export const BodyContent = styled.div`
  background: #ffffff;
  box-shadow: 8px 8px 19px #f5f6f8 !important;
`;

export const Logout = styled.div`
  margin-top: auto;
`;
