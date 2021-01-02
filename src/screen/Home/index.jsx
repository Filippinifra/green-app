import React, { useMemo, useState } from "react";
import { ChartLine } from "components/ChartLine";
import { Badge } from "components/Badge";
import { View, ScrollView } from "react-native";
import { ShadowStyle } from "components/Shadow";
import { useTranslation } from "react-i18next";
import { LoadAndError } from "components/LoadAndError";
import { visualizationType } from "constants/const";
import { Pickers } from "./Pickers";
import { useConsumptions } from "hook/useConsumptions";
import _ from "lodash";
import moment from "moment";
import { Text } from "react-native";
import { COMMON_ERROR_COLOR } from "constants/palette";
import {
  Square,
  WrapperBoxesInRow,
  Wrapper,
  CentrateElement,
  Tips,
  BigLabel,
  SubText,
} from "./styles";

const GridGap = 20;

export const Home = ({ mainColor, secondColor }) => {
  const [heightBox, setHeightBox] = useState(0);
  const [townSelected, setTownSelected] = useState("");
  const [dateSelected, setDateSelected] = useState(null);
  const [visualType, setVisualType] = useState(visualizationType.dayView);

  const { t } = useTranslation();

  const argumentsConsumptions =
    visualType === visualizationType.dayView
      ? {
          startDate: moment(dateSelected).toISOString(),
          endDate: moment(dateSelected).add(1, "d").toISOString(),
          size: 24,
        }
      : visualType === visualizationType.yearView
      ? {
          startDate: moment(dateSelected, "YYYY").startOf("year").toISOString(),
          endDate: moment(dateSelected, "YYYY").endOf("year").toISOString(),
          size: 12,
        }
      : {
          startDate: moment(dateSelected, "MM/YYYY")
            .startOf("month")
            .toISOString(),
          endDate: moment(dateSelected, "MM/YYYY").endOf("month").toISOString(),
          size: moment(dateSelected, "MM/YYYY").daysInMonth(),
        };

  const { consumptions, error: errorConsumtpion } = useConsumptions(
    argumentsConsumptions.startDate,
    argumentsConsumptions.endDate,
    argumentsConsumptions.size,
    townSelected
  );

  const onLayoutSquare = (event) => {
    const { width } = event.nativeEvent.layout;
    const widthNoPadding = width - GridGap / 2;
    setHeightBox(widthNoPadding);
  };

  const chartMemoized = useMemo(
    () => (
      <ChartLine
        data={consumptions}
        height={300}
        size={argumentsConsumptions.size}
      />
    ),
    [consumptions]
  );

  const isAllReady =
    consumptions &&
    consumptions.length &&
    townSelected &&
    dateSelected &&
    visualType;

  const max = isAllReady ? Math.max(...consumptions) : 0;
  const min = isAllReady ? Math.min(...consumptions) : 0;

  const textUnderMaxAndMin = () => {
    if (!isAllReady) {
      return null;
    }

    const cosumptionMinIndex = consumptions.indexOf(min);
    const cosumptionMaxIndex = consumptions.indexOf(max);

    const minWithPmOrAm = moment(cosumptionMinIndex, "hh").format("hh A");
    const maxWithPmOrAm = moment(cosumptionMaxIndex, "hh").format("hh A");

    const minHour = moment(cosumptionMinIndex, "hh").format("HH");
    const maxHour = moment(cosumptionMaxIndex, "hh").format("HH");

    return visualType === visualizationType.dayView
      ? {
          min: t("home.hoursTip", {
            hourAmPm: minWithPmOrAm,
            hour: minHour,
          }).toLowerCase(),
          max: t("home.hoursTip", {
            hourAmPm: maxWithPmOrAm,
            hour: maxHour,
          }).toLowerCase(),
        }
      : visualType === visualizationType.yearView
      ? {
          min: t("monthsShort", { returnObjects: true })[cosumptionMinIndex],
          max: t("monthsShort", { returnObjects: true })[cosumptionMaxIndex],
        }
      : {
          min: `${t("home.day").toLowerCase()} ${cosumptionMinIndex + 1}`,
          max: `${t("home.day").toLowerCase()} ${cosumptionMaxIndex + 1}`,
        };
  };

  const WaitingInputElement = () => (
    <Text style={{ color: COMMON_ERROR_COLOR }}>{t("home.insertFilters")}</Text>
  );

  return (
    <ScrollView>
      <Wrapper>
        <Badge color={secondColor} title={t("home.energyConsumption")}>
          <LoadAndError
            data={consumptions.length}
            error={errorConsumtpion}
            isWaitingInput={!townSelected || !dateSelected || !visualType}
            waitingElement={<WaitingInputElement />}
            loadWrapperStyle={{ height: 300, justifyContent: "center" }}
          >
            {chartMemoized}
          </LoadAndError>
          <Pickers
            townSelected={townSelected}
            setTownSelected={setTownSelected}
            dateSelected={dateSelected}
            setDateSelected={setDateSelected}
            visualType={visualType}
            setVisualType={setVisualType}
          />
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
                <SubText style={{ marginTop: 10 }}>
                  {t("home.maxConsumption")}
                </SubText>
                {textUnderMaxAndMin() && (
                  <SubText>{`(${textUnderMaxAndMin().max})`}</SubText>
                )}
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
                <SubText style={{ marginTop: 10 }}>
                  {t("home.minConsumption")}
                </SubText>
                {textUnderMaxAndMin() && (
                  <SubText>{`(${textUnderMaxAndMin().min})`}</SubText>
                )}
              </CentrateElement>
            </Square>
          </View>
        </WrapperBoxesInRow>
        {t("ecoTips", { returnObjects: true }).map((text, index) => (
          <Square
            style={{ marginTop: GridGap, ...ShadowStyle.ShadowBox }}
            color={secondColor}
            key={`eco-tip-home-${index}`}
          >
            <Tips>{text}</Tips>
          </Square>
        ))}
      </Wrapper>
    </ScrollView>
  );
};
