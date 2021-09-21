import React, { Component } from "react";
import { Wrapper, Layout, Header, TextGroup, Title } from "./Card.styles";

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Header/>
          <TextGroup>
              <Title>Trying Figma and React</Title>
          </TextGroup>
        </Layout>
      </Wrapper>
    );
  }
}
