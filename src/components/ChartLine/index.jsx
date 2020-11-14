import React from "react";
import { View } from "react-native";
import { LineChart, XAxis, YAxis } from "react-native-svg-charts";
import { G, Line } from "react-native-svg";

export const ChartLine = ({ data, height }) => {
  const axesSvg = { fontSize: 10, fill: "grey" };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  const CustomGrid = ({ x, y, data, ticks }) => (
    <G>
      {ticks.map((tick) => (
        <Line
          key={tick}
          x1={"0%"}
          x2={"100%"}
          y1={y(tick)}
          y2={y(tick)}
          stroke={"rgba(0,0,0,0.2)"}
        />
      ))}
      {data.map((_, index) => (
        <Line
          key={index}
          y1={"0%"}
          y2={"100%"}
          x1={x(index)}
          x2={x(index)}
          stroke={"rgba(0,0,0,0.2)"}
        />
      ))}
    </G>
  );

  return (
    <View style={{ height, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View
        style={{ flex: 1, marginLeft: 10, marginTop: 10, marginBottom: 10 }}
      >
        <LineChart
          style={{ flex: 1 }}
          data={data}
          svg={{
            stroke: "#000000",
          }}
        >
          <CustomGrid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight, paddingTop: 10 }}
          data={data}
          formatLabel={(value, index) => (index % 2 == 0 ? index : null)}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
      </View>
    </View>
  );
};
