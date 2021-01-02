import React, { useState } from "react";
import { NewsRow } from "components/NewsRow";
import { FlatList, RefreshControl, View } from "react-native";
import { useSWRInfinite } from "swr";
import { NEWS_ENDPOINT } from "constants/endpoint";
import _ from "lodash";
import { LoadAndError } from "components/LoadAndError";
import { fetcher } from "utils/fetcher";
import { NewsWrapper } from "./styles";

export const News = ({ mainColor, secondColor }) => {
  const [refreshing, setRefreshing] = useState(false);

  const { data, mutate, size, setSize, error } = useSWRInfinite(
    (index) => `${NEWS_ENDPOINT}?size=10&page=${index + 1}`,
    fetcher
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await mutate();
    setRefreshing(false);
  };

  const loadMore = () => {
    setSize(size + 1);
  };

  const news = data ? [].concat(...data) : [];

  return (
    <LoadAndError error={error} data={data} color={mainColor}>
      <FlatList
        data={news}
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
        onEndReached={loadMore}
        refreshControl={
          <View style={{ top: 20 }}>
            <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
          </View>
        }
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
        keyExtractor={(item, index) => `news-element-${index}`}
      />
    </LoadAndError>
  );
};
