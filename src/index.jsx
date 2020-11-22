import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainLayout } from "components/MainLayout";
import { BottomBar } from "components/BottomBar";
import { PATH_HOME } from "constants/path";
import { MAP_PATH_TO_CONFIG, DISPOSITON_PATH } from "constants/config";

const Tab = createBottomTabNavigator();

export const Code = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={PATH_HOME}
      tabBar={(props) => <BottomBar {...props} />}
    >
      {DISPOSITON_PATH.map((path) => {
        const { Component } = MAP_PATH_TO_CONFIG[path];

        return (
          <Tab.Screen name={path}>
            {({ route }) => {
              const nameRoute = route.name;
              const { mainColor, secondColor } = MAP_PATH_TO_CONFIG[nameRoute];

              return (
                <MainLayout nameRoute={nameRoute} colorHeader={mainColor}>
                  <Component mainColor={mainColor} secondColor={secondColor} />
                </MainLayout>
              );
            }}
          </Tab.Screen>
        );
      })}
    </Tab.Navigator>
  </NavigationContainer>
);
