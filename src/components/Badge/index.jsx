import React from "react";
import { View } from "react-native";
import { ShadowStyle } from "components/Shadow";
import { BadgeWrapper, HeaderWrapper, Title, Line } from "./styles";

export const Badge = ({ children, title, color, numberOfLines }) => (
  <View style={ShadowStyle.ShadowBox}>
    <BadgeWrapper color={color}>
      <View>
        <HeaderWrapper color={color} s>
          <Title numberOfLines={numberOfLines}>{title}</Title>
        </HeaderWrapper>
        <Line />
        {children}
      </View>
    </BadgeWrapper>
  </View>
);
