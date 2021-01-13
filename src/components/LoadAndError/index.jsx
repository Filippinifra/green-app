import React from "react";
import { COMMON_FIFTH_COLOR, COMMON_ERROR_COLOR } from "constants/palette";
import { ActivityIndicator, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { CentrateView } from "./styles";

export const LoadAndError = ({
  data,
  error,
  color,
  children,
  isWaitingInput,
  waitingElement,
  loadWrapperStyle,
}) => {
  const { t } = useTranslation();

  if (!data && !error) {
    return isWaitingInput ? (
      <CentrateView style={{ ...loadWrapperStyle }}>
        {waitingElement}
      </CentrateView>
    ) : (
      <CentrateView style={{ ...loadWrapperStyle }}>
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
