import React from "react";
import { NewsRow } from "components/NewsRow";
import { NewsWrapper } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { mock } from "./mock";
import { View } from "react-native";

export const News = ({ mainColor, secondColor }) => (
  <ScrollView>
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      {mock.map(({ title, description, url, image }) => (
        <NewsWrapper>
          <NewsRow
            color={secondColor}
            title={title}
            description={description}
            image={image}
            url={url}
          />
        </NewsWrapper>
      ))}
    </View>
  </ScrollView>
);
