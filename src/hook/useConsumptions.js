import useSWR from "swr";
import { CONSUMPTION_ENDPOINT } from "constants/endpoint";
import { fetcher } from "utils/fetcher";

export const useConsumptions = (startDate, endDate, size, town) => {
  const { data: consumptions, error } = useSWR(
    startDate && endDate && size && town
      ? `${CONSUMPTION_ENDPOINT}?startDate=${startDate}&endDate=${endDate}&size=${size}&town=${town}`
      : null,
    fetcher
  );

  return { consumptions: consumptions || [], error };
};
