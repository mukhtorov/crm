import React from "react";
import {
  Arrow,
  Card,
  CardIcon,
  CardInfo,
  Container,
  Plus,
  Result,
  Title,
  Wrapper,
} from "./style";

import { ReactComponent as User } from "../../assets/icons/usrAnalitics.svg";
import { ReactComponent as Mentor } from "../../assets/icons/mentorAnalitics.svg";
import { ReactComponent as Location } from "../../assets/icons/filialAnalitics.svg";

import { ReactComponent as UserImg } from "../../assets/icons/studentImg.svg";
import { ReactComponent as MentorImg } from "../../assets/icons/mentorImg.svg";
import { ReactComponent as LocationImg } from "../../assets/icons/filialImg.svg";

export const Analitics = (props: any) => {
  return (
    <Container>
      <Title>Analitika</Title>
      <Wrapper>
        {/* Studentlar */}
        <Card bg="#F6FFED">
          <CardInfo>
            <CardIcon bg="#52c41a">
              <User />
            </CardIcon>
            <Title>Talabalar</Title>
            <Plus bg="#B7EB8F" />
          </CardInfo>
          <CardInfo>
            <Result>
              <Arrow status={"false"} />
              382
            </Result>

            <UserImg />
          </CardInfo>
        </Card>
        {/* Mentorlar */}
        <Card bg="#FFFBE6">
          <CardInfo>
            <CardIcon bg="#FADB14">
              <Mentor />
            </CardIcon>
            <Title>Ustozlar</Title>
            <Plus bg="#FFE58F" />
          </CardInfo>
          <CardInfo>
            <Result>
              <Arrow status={"true"} />
              36
            </Result>

            <MentorImg />
          </CardInfo>
        </Card>

        {/* Filiallar */}
        <Card bg="#E6F7FF">
          <CardInfo>
            <CardIcon bg="#1890FF">
              <Location />
            </CardIcon>
            <Title>Filiallar</Title>
            <Plus bg="#91D5FF" />
          </CardInfo>
          <CardInfo>
            <Result>
              <span>=</span>3
            </Result>
            <LocationImg />
          </CardInfo>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Analitics;
