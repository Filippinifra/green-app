import { COMMON_THIRD_COLOR } from "constants/palette";
import React from "react";
import AnimatedSplash from "react-native-animated-splash-screen";

export const IntroAnimation = ({ children, loaded }) => (
  <AnimatedSplash
    translucent={true}
    isLoaded={loaded}
    logoImage={require("images/logo.png")}
    backgroundColor={COMMON_THIRD_COLOR}
    logoWidth={80}
    logoHeight={80}
  >
    {children}
  </AnimatedSplash>
);
