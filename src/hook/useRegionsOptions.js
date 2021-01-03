import useSWR from "swr";
import { CONSUMPTION_REGIONS_ENDPOINT } from "constants/endpoint";
import { fetcher } from "utils/fetcher";
import { useMemo } from "react";

export const useRegionsOptions = () => {
  const { data: regions, error } = useSWR(
    CONSUMPTION_REGIONS_ENDPOINT,
    fetcher
  );

  const regionsOption = useMemo(
    () =>
      regions
        ? regions.map((region) => ({
            label: region,
            value: region,
          }))
        : [],
    [regions]
  );

  return { regions: regionsOption, error };
};
