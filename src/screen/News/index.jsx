import React, { useState } from "react";
import { NewsRow } from "components/NewsRow";
import { NewsWrapper } from "./styles";
import { FlatList, RefreshControl, View } from "react-native";
import { useSWRInfinite } from "swr";
import { NEWS_ENDPOINT } from "constants/endpoint";
import _ from "lodash";
import { LoadAndError } from "components/LoadAndError";
import { fetcher } from "utils/fetcher";
import { mock } from "./mock";

const isMockEnabled = true;

export const News = ({ mainColor, secondColor }) => {
  const [refreshing, setRefreshing] = useState(false);

  const { data, mutate, size, setSize, error } = useSWRInfinite(
    (index) => `${NEWS_ENDPOINT}?page=${index}`,
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

  const cleanTempDescription = (desc) =>
    desc.split("/a>")[1].substr(0, desc.split("/a>")[1].length - 4);

  return (
    <LoadAndError
      error={isMockEnabled ? null : error}
      data={isMockEnabled ? mock : data}
      color={mainColor}
    >
      <FlatList
        data={isMockEnabled ? mock : news}
        renderItem={({ item: { title, description, url, image } }) => (
          <NewsWrapper>
            <NewsRow
              color={secondColor}
              title={title}
              description={
                isMockEnabled ? description : cleanTempDescription(description)
              }
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
