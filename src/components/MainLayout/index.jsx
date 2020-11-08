import React from "react";
import { Dimensions, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { FIFTH_COLOR } from "constants/palette";
import {
  HEIGHT_BOTTOM_NAVIGATOR,
  HEIGHT_TOP_TITLE_ROUTE_NAME,
  MAP_PATH_TO_COLORS,
} from "constants/config";
import { Title } from "./styles";

export const MainLayout = ({ children, nameRoute }) => {
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  const ViewHeight =
    height -
    (HEIGHT_BOTTOM_NAVIGATOR +
      insets.bottom +
      insets.top +
      HEIGHT_TOP_TITLE_ROUTE_NAME);

  const headerBackgroundColor = MAP_PATH_TO_COLORS[nameRoute];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: headerBackgroundColor }}>
      <View
        style={{
          height: HEIGHT_TOP_TITLE_ROUTE_NAME,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>{nameRoute.toUpperCase()}</Title>
      </View>
      <View
        style={{
          height: ViewHeight,
          backgroundColor: FIFTH_COLOR,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
