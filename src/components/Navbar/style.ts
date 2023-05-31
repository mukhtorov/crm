import { Button } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
`;

export const Time = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;

  color: #253e5f;

  flex: none;
  order: 0;
  flex-grow: 0;

  padding: 0 30px;
`;

// export const Plus = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// width: 21px;
// height: 21px;
//   min-width: 21px;
//   min-height: 21px;
//   border: 1px solid #1890ff;
//   border-radius: 50%;
//   user-select: none;
//   color: #1890ff;
//   margin: 0 15px;
// `;

export const ButtonMUI = styled(Button)`
  padding-left: 5px !important;
  color: #253e5f !important;
  font-family: "Montserrat" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  display: flex !important;
  align-items: center !important;
`;

export const User = styled.div`
  display: flex;
  margin-left: 20px;
  max-width: 200px;
  width: 100%;
  flex-wrap: nowrap;
  text-wrap: nowrap;
  justify-content: space-between;
`;

export const UseImage = styled.img`
  width: 48px;
  height: 48px;
`;
export const UserTitle = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #253e5f;
  text-wrap: nowrap;
`;

export const Plus = styled(Add)<{ bg?: string }>`
  display: flex;
  margin: 0 15px;
  min-width: 24px;
  min-height: 24px;
  & path {
    fill: #1890ff;
  }
  user-select: none;
`;
