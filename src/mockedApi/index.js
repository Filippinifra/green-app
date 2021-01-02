import {
  NEWS_ENDPOINT,
  CONSUMPTION_TOWNS_ENDPOINT,
  CONSUMPTION_DATES_ENDPOINT,
  CONSUMPTION_ENDPOINT,
} from "constants/endpoint";
import { createServer } from "miragejs";
import { newsMock } from "screen/News/mock";
import { homeMock } from "screen/Home/mock";
import moment from "moment";

export const runMockServer = () => {
  let server = createServer();

  server.get(NEWS_ENDPOINT, (schema, { queryParams }) => {
    const page = Number(queryParams.page);
    if (page === 1) return newsMock.pageOne;
    if (page === 2) return newsMock.pageTwo;
    if (page === 3) return newsMock.pageThree;
    return [];
  });

  server.get(CONSUMPTION_TOWNS_ENDPOINT, homeMock.towns);

  server.get(CONSUMPTION_DATES_ENDPOINT, (schema, { queryParams }) => {
    const { town } = queryParams;
    if (town === "Milano") return homeMock.datesMilano;
    if (town === "Roma") return homeMock.datesRoma;
    if (town === "Napoli") return homeMock.datesNapoli;
    return [];
  });

  server.get(CONSUMPTION_ENDPOINT, (schema, { queryParams }) => {
    const { startDate, endDate } = queryParams;

    const diffDays = moment(endDate).diff(moment(startDate), "days");

    return diffDays === 1
      ? homeMock.consumptionDay
      : diffDays > 1 && diffDays < 33
      ? homeMock.consumptionMonth
      : homeMock.consumptionYear;
  });
};
