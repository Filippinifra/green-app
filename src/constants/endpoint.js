import { isMockingServer } from "./featureFlag";

export const backendUrl = "http://vmi459091.contaboserver.net:3000";

const getCompleteUrl = (endpoint) =>
  isMockingServer ? `/${endpoint}` : `${backendUrl}/${endpoint}`;

export const NEWS_ENDPOINT = getCompleteUrl("news");

const consumptionPath = "consumption";
export const CONSUMPTION_REGIONS_ENDPOINT = getCompleteUrl(
  `${consumptionPath}/regions`
);
export const CONSUMPTION_DATES_ENDPOINT = getCompleteUrl(
  `${consumptionPath}/firstDate`
);
export const CONSUMPTION_ENDPOINT = getCompleteUrl(consumptionPath);
