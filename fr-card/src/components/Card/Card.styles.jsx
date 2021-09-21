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

export const Subtitle = styled.p`
  position: absolute;
  top: 40px;
  left: 5px;
  width: 300px;
  height: 213px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #9e9e9e;
`;

export const InfoRectangle = styled.div`
  position: relative;
  width: 94px;
  height: 25px;
  top: 230px;
  background: #ffe259;
  border-radius: 20px;
`;

export const InfoText = styled.h3`
  position: absolute;
  width: 54px;
  height: 18px;
  text-align: center;
  left: 18px;
  bottom: -12px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #d27f03;
`;

export const UserWrapper = styled.div`
  position: absolute;
  width: 155px;
  height: 44px;
  left: 30px;
  top: 415px;
  background-color: green;
`;
