import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COMMON_THIRD_COLOR, COMMON_FOURTH_COLOR } from "constants/palette";
import { WrapperBottomBar, ItemContainer, TextItem } from "./styles";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  HEIGHT_BOTTOM_NAVIGATOR,
  MAP_PATH_TO_CONFIG,
  DISPOSITON_PATH,
} from "constants/config";

export const BottomBar = ({ navigation, state }) => {
  const insets = useSafeAreaInsets();
  const currentPath = DISPOSITON_PATH[state.index];
  const bottomSafeAreaHeight = insets.bottom;

  return (
    <WrapperBottomBar
      botHeaderHeight={bottomSafeAreaHeight}
      height={HEIGHT_BOTTOM_NAVIGATOR + bottomSafeAreaHeight}
    >
      {DISPOSITON_PATH.map((path, index) => {
        const { iconName, tabTitle } = MAP_PATH_TO_CONFIG[path];

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(path)}
            activeOpacity={1}
            key={`bottom-icon-${index}`}
          >
            <ItemContainer>
              <Icon
                name={iconName}
                color={
                  currentPath === path
                    ? COMMON_THIRD_COLOR
                    : COMMON_FOURTH_COLOR
                }
              />
              <TextItem
                colorText={
                  currentPath === path
                    ? COMMON_THIRD_COLOR
                    : COMMON_FOURTH_COLOR
                }
              >
                {tabTitle}
              </TextItem>
            </ItemContainer>
          </TouchableOpacity>
        );
      })}
    </WrapperBottomBar>
  );
};
