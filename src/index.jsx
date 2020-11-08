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
            {({ route }) => (
              <MainLayout nameRoute={route.name}>
                <Component />
              </MainLayout>
            )}
          </Tab.Screen>
        );
      })}
    </Tab.Navigator>
  </NavigationContainer>
);