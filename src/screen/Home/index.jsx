import React, { useState } from "react";
import { ChartLine } from "components/ChartLine";
import { data } from "./mock";
import { Badge } from "components/Badge";
import {
  Square,
  WrapperBoxesInRow,
  Wrapper,
  CentrateElement,
  Tips,
  BigLabel,
  SubText,
} from "./styles";
import { View, ScrollView } from "react-native";
import { ShadowStyle } from "components/Shadow";
import { EcoTips } from "text/tips";

const GridGap = 20;

export const Home = ({ mainColor, secondColor }) => {
  const [heightBox, setHeightBox] = useState(0);

  const onLayoutSquare = (event) => {
    const { width } = event.nativeEvent.layout;
    const widthNoPadding = width - GridGap / 2;
    setHeightBox(widthNoPadding);
  };

  const { hoursAndEnergy, max, min } = data;

  return (
    <ScrollView>
      <Wrapper>
        <Badge color={secondColor} title="Consumi giornalieri nazionali">
          <ChartLine data={hoursAndEnergy} height={300} />
        </Badge>
        <WrapperBoxesInRow gridGap={GridGap}>
          <View
            style={{ width: "50%", paddingRight: GridGap / 2 }}
            onLayout={onLayoutSquare}
          >
            <Square
              color={mainColor}
              height={heightBox}
              style={ShadowStyle.ShadowBox}
            >
              <CentrateElement>
                <BigLabel style={{ marginTop: 20 }}>{max}</BigLabel>
                <SubText style={{ marginTop: 10 }}>MAX consumi</SubText>
              </CentrateElement>
            </Square>
          </View>
          <View style={{ width: "50%", paddingLeft: GridGap / 2 }}>
            <Square
              color={secondColor}
              height={heightBox}
              style={ShadowStyle.ShadowBox}
            >
              <CentrateElement>
                <BigLabel style={{ marginTop: 20 }}>{min}</BigLabel>
                <SubText style={{ marginTop: 10 }}>min consumi</SubText>
              </CentrateElement>
            </Square>
          </View>
        </WrapperBoxesInRow>
        {EcoTips.map((text) => (
          <Square
            style={{ marginTop: GridGap, ...ShadowStyle.ShadowBox }}
            color={secondColor}
          >
            <Tips>{text}</Tips>
          </Square>
        ))}
      </Wrapper>
    </ScrollView>
  );
};
