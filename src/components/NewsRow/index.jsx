import React, { useState } from "react";
import { View, Text, Linking } from "react-native";
import { SECOND_COLOR, FIFTH_COLOR } from "constants/palette";
import { NewsImage, InfoWrapper, ViewMoreButtonWrapper } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NewsRow = ({ title, description, image, minReading, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const numberOfLines = isOpen ? 4 : 1;

  return (
    <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InfoWrapper>
          <Text style={{ color: SECOND_COLOR, fontSize: 14 }} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{ fontSize: 14 }} numberOfLines={numberOfLines}>
            {description}
          </Text>
          <Text
            style={{
              position: "absolute",
              right: 0,
              fontSize: 9,
              color: SECOND_COLOR,
            }}
          >{`${minReading} min`}</Text>
        </InfoWrapper>
        <View
          style={{
            marginLeft: 20,
          }}
        >
          <NewsImage source={{ url: image }} />
        </View>
      </View>
      {isOpen && (
        <View style={{ width: 200, alignSelf: "center" }}>
          <TouchableOpacity onPress={() => Linking.openURL(url)}>
            <ViewMoreButtonWrapper>
              <Text style={{ fontSize: 14, color: FIFTH_COLOR }}>
                View more
              </Text>
            </ViewMoreButtonWrapper>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
