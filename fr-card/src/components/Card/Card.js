import React, { Component } from "react";
import { Wrapper, Layout, Header } from "./Card.styles";

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Header/>
        </Layout>
      </Wrapper>
    );
  }
}
