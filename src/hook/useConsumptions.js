import useSWR from "swr";
import { CONSUMPTION_ENDPOINT } from "constants/endpoint";
import { fetcher } from "utils/fetcher";
import _ from "lodash";

export const useConsumptions = (startDate, endDate, size, region) => {
  const { data, error } = useSWR(
    startDate && endDate && size && region
      ? `${CONSUMPTION_ENDPOINT}?startDate=${startDate}&endDate=${endDate}&size=${size}&region=${region}`
      : null,
    fetcher
  );

  const consumptions = _.get(data, "energy", null);
  const unitMeasure = _.get(data, "unitMeasure", null);

  return {
    consumptions: consumptions || [],
    unitMeasure: unitMeasure || "",
    error,
  };
};
