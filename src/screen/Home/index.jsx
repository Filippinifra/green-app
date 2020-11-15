import React from "react";
import { ChartLine } from "components/ChartLine";
import { data } from "./mock";
import { Badge } from "components/Badge";
import { Wrapper } from "./styles";

export const Home = ({ mainColor, secondColor }) => (
  <Wrapper>
    <Badge color={secondColor} title="Consumi giornalieri nazionali">
      <ChartLine data={data} height={300} />
    </Badge>
  </Wrapper>
);
