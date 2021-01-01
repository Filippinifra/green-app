import React from "react";

const { NEWS_ENDPOINT } = require("constants/endpoint");
const { createServer } = require("miragejs");
const { newsMock } = require("screen/News/mock");

export const runMockServer = () => {
  let server = createServer();

  server.get(NEWS_ENDPOINT, (schema, { queryParams }) => {
    const page = Number(queryParams.page);
    if (page === 1) return newsMock.pageOne;
    if (page === 2) return newsMock.pageTwo;
    if (page === 3) return newsMock.pageThree;
    return [];
  });
};
