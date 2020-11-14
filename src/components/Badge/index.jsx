import React from "react";
import { BadgeWrapper, HeaderWrapper, Title } from "./styles";

export const Badge = ({ children, title, color }) => (
  <BadgeWrapper color={color}>
    <HeaderWrapper color={color} s>
      <Title>{title}</Title>
    </HeaderWrapper>
    {children}
  </BadgeWrapper>
);
