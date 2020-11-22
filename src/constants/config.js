import { PATH_HOME, PATH_NEWS } from "constants/path";
import {
  FOURTH_COLOR,
  FIRST_COLOR,
  THIRD_COLOR,
  SECOND_COLOR,
} from "./palette";

import { Home } from "screen/Home";
import { News } from "screen/News";

import EnFlag from "images/flags/en_flag.png";
import ItFlag from "images/flags/it_flag.png";

export const HEIGHT_BOTTOM_NAVIGATOR = 60;
export const HEIGHT_TOP_TITLE_ROUTE_NAME = 40;

export const MAP_PATH_TO_CONFIG = {
  home: {
    mainColor: THIRD_COLOR,
    secondColor: FOURTH_COLOR,
    iconName: "equalizer",
    path: PATH_HOME,
    tabTitle: "HOME",
    Component: Home,
  },
  news: {
    mainColor: FIRST_COLOR,
    secondColor: SECOND_COLOR,
    iconName: "public",
    path: PATH_NEWS,
    tabTitle: "NEWS",
    Component: News,
  },
};

export const DISPOSITON_PATH = [PATH_NEWS, PATH_HOME];

export const LANGUAGES = ["en", "it"];

export const MAP_LANGUAGES_TO_FLAGS = {
  en: EnFlag,
  it: ItFlag,
};
