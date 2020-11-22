import React from "react";
import { COMMON_FIFTH_COLOR, COMMON_ERROR_COLOR } from "constants/palette";
import { ActivityIndicator, Text, View } from "react-native";
import { CentrateView } from "./styles";

export const LoadAndError = ({ data, error, color, children }) => {
  if (!data && !error) {
    return (
      <CentrateView>
        <ActivityIndicator
          size="small"
          color={color || COMMON_FIFTH_COLOR}
          size={"large"}
        />
      </CentrateView>
    );
  }

  if (error || !data) {
    return (
      <CentrateView>
        <Text style={{ color: COMMON_ERROR_COLOR }}>
          {"An error occoured!"}
        </Text>
      </CentrateView>
    );
  }

  return children;
};
