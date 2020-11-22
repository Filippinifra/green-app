import React, { useState } from "react";
import { NewsRow } from "components/NewsRow";
import { NewsWrapper } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { mock } from "./mock";
import { FlatList, RefreshControl, View } from "react-native";

export const News = ({ mainColor, secondColor }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <FlatList
      data={mock}
      renderItem={({ item: { title, description, url, image } }) => (
        <NewsWrapper>
          <NewsRow
            color={secondColor}
            title={title}
            description={description}
            image={image}
            url={url}
          />
        </NewsWrapper>
      )}
      onEndReached={() => {
        console.log("end");
      }}
      refreshControl={
        <View style={{ top: 20 }}>
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        </View>
      }
      contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
    />
  );
};
