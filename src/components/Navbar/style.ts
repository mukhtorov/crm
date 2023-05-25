import styled from "styled-components";

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
  margin: 0 15px;
`;
