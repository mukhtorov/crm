import styled from "styled-components";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrowAnalitics.svg";

export const Container = styled.div`
  background: white !important;
  border-radius: 8px;
  padding: 20px 24px;
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #253e5f;
`;

interface Prop {
  gap?: number;
  bg?: string;
}

export const Wrapper = styled.div<Prop>`
  display: flex;
  gap: ${({ gap }) => `${gap || 24}px`};
  margin: 16px 0 24px 0;
`;

export const Card = styled.div<Prop>`
  display: flex;
  flex-direction: column;
  background: ${({ bg }) => bg};
  border-radius: 8px;
  flex: 1;
  padding: 24px;
  gap: 20px;
`;
export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardIcon = styled.div<{ bg: string }>`
  width: 48px;
  height: 48px;
  background: ${({ bg }) => bg};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
export const Plus = styled(Add)<{ bg?: string }>`
  display: flex;
  margin-left: auto;
  & path {
    fill: ${({ bg }) => bg};
  }
`;
export const Arrow = styled(arrow)<{ status: boolean | string }>`
  margin: 0 16px;
  & path {
    fill: ${({ status }) => (status === "true" ? "#52C41A" : "#F5222D")};
  }
  transform: rotate(${({ status }) => status === "true" && "180deg"});
`;

export const CardImg = styled.img`
  display: flex;
`;
export const Result = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 56px;
  display: flex;
  align-items: center;
  color: #253e5f;
  span {
    color: #bbc3cd;
    margin-right: 12px;
  }
`;
