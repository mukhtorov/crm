import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/rightArrow.svg";

// type ColorProp = {
//   bg: string;
//   btn: string;
// };

export const Container = styled.div<any>`
  background: ${({ color }) => color.bg};
  height: 76px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding: 0 24px;
  border-radius: 8px 8px 0px 0px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;

  color: #253e5f;
`;

export const Arrow = styled(arrow)`
  /* margin-left: auto; */
`;
