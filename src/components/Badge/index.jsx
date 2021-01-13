import React from "react";
import { View } from "react-native";
import { ShadowStyle } from "components/Shadow";
import { BadgeWrapper, HeaderWrapper, Title } from "./styles";

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
