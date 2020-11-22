const backendUrl = "http://vmi459091.contaboserver.net:3000";

const getCompleteUrl = (endpoint) => `${backendUrl}/${endpoint}`;

export const NEWS_ENDPOINT = getCompleteUrl("news");
