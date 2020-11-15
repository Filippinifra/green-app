import { Home } from "screen/Home";
import { News } from "screen/News";
export const PATH_HOME = "home";
export const PATH_NEWS = "news";

export const DISPOSITON_PATH = [PATH_NEWS, PATH_HOME];

export const MAP_PATH_TO_COMPONENTS = {
  home: Home,
  news: News,
};
