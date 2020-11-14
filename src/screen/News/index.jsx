import React from "react";
import { NewsRow } from "components/NewsRow";
import { NewsWrapper } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { mock } from "./mock";
import { View } from "react-native";

export const News = ({ color }) => (
  <ScrollView>
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      {mock.map(({ title, description, url, minReading, image }) => (
        <NewsWrapper>
          <NewsRow
            color={color}
            title={title}
            description={description}
            image={image}
            minReading={minReading}
            url={url}
          />
        </NewsWrapper>
      ))}
    </View>
  </ScrollView>
);
