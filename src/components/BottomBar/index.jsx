import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FIFTH_COLOR, SIXTH_COLOR } from "constants/palette";
import { WrapperBottomBar, ItemContainer, TextItem } from "./styles";
import { Icon } from "react-native-elements";
import { DISPOSITON_PATH, PATH_HOME, PATH_NEWS } from "constants/path";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HEIGHT_BOTTOM_NAVIGATOR } from "constants/config";

export const BottomBar = ({ navigation, state }) => {
  const insets = useSafeAreaInsets();
  const currentPath = DISPOSITON_PATH[state.index];
  const bottomSafeAreaHeight = insets.bottom;

  return (
    <WrapperBottomBar
      botHeaderHeight={bottomSafeAreaHeight}
      height={HEIGHT_BOTTOM_NAVIGATOR + bottomSafeAreaHeight}
    >
      <TouchableOpacity onPress={() => navigation.navigate(PATH_HOME)}>
        <ItemContainer>
          <Icon
            name="equalizer"
            color={currentPath === PATH_HOME ? FIFTH_COLOR : SIXTH_COLOR}
          />
          <TextItem
            colorText={currentPath === PATH_HOME ? FIFTH_COLOR : SIXTH_COLOR}
          >
            HOME
          </TextItem>
        </ItemContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(PATH_NEWS)}>
        <ItemContainer>
          <Icon
            name="public"
            color={currentPath === PATH_NEWS ? FIFTH_COLOR : SIXTH_COLOR}
          />
          <TextItem
            colorText={currentPath === PATH_NEWS ? FIFTH_COLOR : SIXTH_COLOR}
          >
            NEWS
          </TextItem>
        </ItemContainer>
      </TouchableOpacity>
    </WrapperBottomBar>
  );
};
