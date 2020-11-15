import React from "react";
import { BadgeWrapper, HeaderWrapper, Title } from "./styles";
import { View } from "react-native";
import { ShadowStyle } from "components/Shadow";

export const Badge = ({ children, title, color }) => (
  <View style={ShadowStyle.ShadowBox}>
    <BadgeWrapper color={color}>
      <View>
        <HeaderWrapper color={color} s>
          <Title>{title}</Title>
        </HeaderWrapper>
        {children}
      </View>
    </BadgeWrapper>
  </View>
);
