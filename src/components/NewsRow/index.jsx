import React, { useState } from "react";
import { View, Text, Linking } from "react-native";
import { COMMON_THIRD_COLOR } from "constants/palette";
import { NewsImage, InfoWrapper, ViewMoreButtonWrapper } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge } from "components/Badge";

export const NewsRow = ({
  title,
  description,
  image,
  minReading,
  url,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const numberOfLines = isOpen ? 10 : 3;

  return (
    <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
      <Badge color={color} title={title}>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <InfoWrapper>
              <Text style={{ fontSize: 14 }} numberOfLines={numberOfLines}>
                {description}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 9,
                  color,
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
                <ViewMoreButtonWrapper color={color}>
                  <Text style={{ fontSize: 14, color: COMMON_THIRD_COLOR }}>
                    View more
                  </Text>
                </ViewMoreButtonWrapper>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Badge>
    </TouchableOpacity>
  );
};
