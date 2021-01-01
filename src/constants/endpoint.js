import { isMockingServer } from "./featureFlag";

export const backendUrl = "http://vmi459091.contaboserver.net:3000";

const getCompleteUrl = (endpoint) =>
  isMockingServer ? `/${endpoint}` : `${backendUrl}/${endpoint}`;

export const NEWS_ENDPOINT = getCompleteUrl("news");
