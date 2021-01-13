import React from "react";
import { Dimensions, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COMMON_THIRD_COLOR } from "constants/palette";
import {
  HEIGHT_BOTTOM_NAVIGATOR,
  HEIGHT_TOP_TITLE_ROUTE_NAME,
} from "constants/config";
import { FlagChangeBox } from "components/FlagChangeBox";
import { Title, RightBoxHeader } from "./styles";

export const MainLayout = ({ children, nameRoute, colorHeader }) => {
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  const ViewHeight =
    height -
    (HEIGHT_BOTTOM_NAVIGATOR +
      insets.bottom +
      insets.top +
      HEIGHT_TOP_TITLE_ROUTE_NAME);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorHeader }}>
      <View
        style={{
          height: HEIGHT_TOP_TITLE_ROUTE_NAME,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>{nameRoute.toUpperCase()}</Title>
        <RightBoxHeader>
          <FlagChangeBox />
        </RightBoxHeader>
      </View>
      <View
        style={{
          height: ViewHeight,
          backgroundColor: COMMON_THIRD_COLOR,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
