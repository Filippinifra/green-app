import useSWR from "swr";
import { CONSUMPTION_TOWNS_ENDPOINT } from "constants/endpoint";
import { fetcher } from "utils/fetcher";
import { useMemo } from "react";

export const useTownsOptions = () => {
  const { data: towns, error } = useSWR(CONSUMPTION_TOWNS_ENDPOINT, fetcher);

  const townsOption = useMemo(
    () =>
      towns
        ? towns.map((town) => ({
            label: town,
            value: town,
          }))
        : [],
    [towns]
  );

  return { towns: townsOption, error };
};
