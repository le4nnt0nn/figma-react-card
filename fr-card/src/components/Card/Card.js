import React, { Component } from "react";
import {
  Wrapper,
  Layout,
  Header,
  TextGroup,
  Title,
  Subtitle,
  InfoRectangle,
  InfoText,
  UserWrapper,
  UserIcon,
  UserName,
  UserDate,
} from "./Card.styles";

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Header />
          <TextGroup>
            <Title>Trying Figma and React</Title>
            <Subtitle>
              A test trying Figma and React.js with styled components. I want to
              learn more about this. Looks cool!
            </Subtitle>
            <InfoRectangle>
              <InfoText>React.js</InfoText>
            </InfoRectangle>
          </TextGroup>
          <UserWrapper>
            <UserIcon />
            <UserName>Le4nnt0nn</UserName>
            <UserDate>September, 2021</UserDate>
          </UserWrapper>
        </Layout>
      </Wrapper>
    );
  }
}
