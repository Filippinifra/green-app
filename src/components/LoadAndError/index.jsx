import React from "react";
import { COMMON_FIFTH_COLOR, COMMON_ERROR_COLOR } from "constants/palette";
import { ActivityIndicator, Text } from "react-native";
import { CentrateView } from "./styles";
import { useTranslation } from "react-i18next";

export const LoadAndError = ({ data, error, color, children }) => {
  const { t } = useTranslation();

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
          {t("general.errorOccoured")}
        </Text>
      </CentrateView>
    );
  }

  return children;
};