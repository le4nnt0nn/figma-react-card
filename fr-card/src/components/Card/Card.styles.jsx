import React from "react";
import styled, { keyframes } from "styled-components";
import userIcon from "../../assets/userIcon.jpg";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const layoutAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.04); }
`;

export const Layout = styled.div`
  position: relative;
  width: 370px;
  height: 467px;
  margin: 100px auto;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  animation: ${layoutAnimation} ease-in 1s infinite alternate;
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
  display: flex;
  width: 155px;
  height: 44px;
  left: 30px;
  top: 415px;
`;

export const UserIcon = styled.img`
  position: absolute;
  left: 0;
  width: 44px;
  height: 44px;
  background-image: url(${userIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
`;

export const UserName = styled.h3`
  position: absolute;
  width: 68px;
  height: 15px;
  top: 0;
  margin: 5px 50px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;

  color: #000000;
`;

export const UserDate = styled.h4`
  position: absolute;
  width: 100px;
  height: 15px;
  margin-left: 50px;
  margin-top: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;

  color: #6d6d6d;
`;
