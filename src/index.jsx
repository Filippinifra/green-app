import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainLayout } from "components/MainLayout";
import { BottomBar } from "components/BottomBar";
import { PATH_HOME } from "constants/path";
import { MAP_PATH_TO_CONFIG, DISPOSITON_PATH } from "constants/config";

import "text/i18n";
import { getStorageItem, STORAGE_LANG_KEY } from "utils/storage";
import i18n from "text/i18n";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

export const Code = () => {
  const { t } = useTranslation();

  useEffect(() => {
    getStorageItem(STORAGE_LANG_KEY, (value) => {
      i18n.changeLanguage(value);
    });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={PATH_HOME}
        tabBar={(props) => <BottomBar {...props} />}
      >
        {DISPOSITON_PATH.map((path) => {
          const {
            Component,
            tabTitle,
            mainColor,
            secondColor,
          } = MAP_PATH_TO_CONFIG[path];

          return (
            <Tab.Screen
              name={path}
              component={() => (
                <MainLayout nameRoute={tabTitle} colorHeader={mainColor}>
                  <Component mainColor={mainColor} secondColor={secondColor} />
                </MainLayout>
              )}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
