import React, { useMemo, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COMMON_THIRD_COLOR } from "constants/palette";
import {
  HEIGHT_BOTTOM_NAVIGATOR,
  HEIGHT_TOP_TITLE_ROUTE_NAME,
  LANGUAGES,
  MAP_LANGUAGES_TO_FLAGS,
} from "constants/config";
import { Title, RightBoxHeader, FlagImage } from "./styles";
import i18n from "text/i18n";

export const MainLayout = ({ children, nameRoute, colorHeader }) => {
  const currentLang = i18n.language;
  const [flagNation, setFlagNation] = useState(
    MAP_LANGUAGES_TO_FLAGS[currentLang]
  );

  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  const ViewHeight =
    height -
    (HEIGHT_BOTTOM_NAVIGATOR +
      insets.bottom +
      insets.top +
      HEIGHT_TOP_TITLE_ROUTE_NAME);

  const changeLang = () => {
    const currentLang = i18n.language;
    const indexLang = LANGUAGES.indexOf(currentLang);
    if (indexLang === LANGUAGES.length - 1) {
      const newLang = LANGUAGES[0];
      setFlagNation(MAP_LANGUAGES_TO_FLAGS[newLang]);
      i18n.changeLanguage(newLang);
    } else {
      const newLang = LANGUAGES[indexLang + 1];
      setFlagNation(MAP_LANGUAGES_TO_FLAGS[newLang]);
      i18n.changeLanguage(newLang);
    }
  };

  const FlagBox = () => (
    <RightBoxHeader>
      <TouchableOpacity onPress={changeLang} activeOpacity={1}>
        <FlagImage source={flagNation} />
      </TouchableOpacity>
    </RightBoxHeader>
  );

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
        <FlagBox />
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
