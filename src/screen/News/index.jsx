import React from "react";
import { NewsRow } from "components/NewsRow";
import { FeedWrapper, Separator } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { mock } from "./mock";
import { View } from "react-native";

export const News = () => (
  <ScrollView>
    <View style={{ marginBottom: 20, marginTop: 20 }}>
      {mock.map(({ title, description, url, minReading, image }) => (
        <>
          <FeedWrapper>
            <NewsRow
              title={title}
              description={description}
              image={image}
              minReading={minReading}
              url={url}
            />
          </FeedWrapper>
          <Separator />
        </>
      ))}
    </View>
  </ScrollView>
);
