import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainLayout } from "components/MainLayout";
import { BottomBar } from "components/BottomBar";
import {
  DISPOSITON_PATH,
  MAP_PATH_TO_COMPONENTS,
  PATH_HOME,
} from "constants/path";

import { MAP_PATH_TO_COLORS } from "constants/config";

const Tab = createBottomTabNavigator();

export const Code = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName={PATH_HOME}
      tabBar={(props) => <BottomBar {...props} />}
    >
      {DISPOSITON_PATH.map((value) => {
        const Component = MAP_PATH_TO_COMPONENTS[value];
        return (
          <Tab.Screen name={value}>
            {({ route }) => {
              const nameRoute = route.name;
              const color = MAP_PATH_TO_COLORS[nameRoute];

              return (
                <MainLayout nameRoute={nameRoute} color={color}>
                  <Component color={color} />
                </MainLayout>
              );
            }}
          </Tab.Screen>
        );
      })}
    </Tab.Navigator>
  </NavigationContainer>
);
