import { TouchableOpacity } from "react-native";

export const TouchElement = ({ activeOpacity = 0.7, props }) => (
  <TouchableOpacity activeOpacity={activeOpacity} {...props} />
);
