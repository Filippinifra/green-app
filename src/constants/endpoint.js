import { isMockingServer } from "./featureFlag";

export const backendUrl = "http://vmi459091.contaboserver.net:3000";

const getCompleteUrl = (endpoint) =>
  isMockingServer ? `/${endpoint}` : `${backendUrl}/${endpoint}`;

export const NEWS_ENDPOINT = getCompleteUrl("news");
export const CONSUMPTION_REGIONS_ENDPOINT = getCompleteUrl(
  "consumption/regions"
);
export const CONSUMPTION_DATES_ENDPOINT = getCompleteUrl("consumption/dates");
export const CONSUMPTION_ENDPOINT = getCompleteUrl("consumption");
