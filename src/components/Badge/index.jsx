import React from "react";
import { BadgeWrapper, HeaderWrapper, Title } from "./styles";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export const Badge = ({ children, title, color }) => (
  <View style={styles.shadow}>
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
