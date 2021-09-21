import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Layout = styled.div`
  position: relative;
  width: 370px;
  height: 467px;
  margin: 100px auto;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Header = styled.div`
  position: absolute;
  width: 370px;
  height: 137px;
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  border-radius: 20px;
`;

export const TextGroup = styled.div`
  position: relative;
  background-color: red;
  width: 312px;
  height: 259px;
  left: 30px;
  top: 150px;
`;

export const Title = styled.h1`
  position: absolute;
  left: 13px;
  width: 282px;
  height: 29px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;
