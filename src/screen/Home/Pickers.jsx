import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { visualizationType } from "constants/const";
import { Picker } from "components/Picker";
import { useRegionsOptions } from "hook/useRegionsOptions.js";
import { useAvailableDatesOptions } from "hook/useAvailableDatesOptions";
import _ from "lodash";
import { Icon } from "react-native-elements";
import { COMMON_ERROR_COLOR, COMMON_FIFTH_COLOR } from "constants/palette";
import { PickersWrapper, PickerAndIconWrapper } from "./styles";

export const Pickers = ({
  regionSelected,
  setRegionSelected,
  dateSelected,
  setDateSelected,
  visualType,
  setVisualType,
}) => {
  const { t } = useTranslation();

  const [hasChangeSomething, setHasChangeSomething] = useState(false);
  const [firstTimeSetRegion, setFirstTimeSetRegion] = useState(true);
  const [firstTimeSetDate, setFirstTimeSetDate] = useState(true);

  const { regions } = useRegionsOptions();
  const { dates, months, years } = useAvailableDatesOptions(
    regionSelected,
    visualType,
    t("monthsLong", { returnObjects: true })
  );

  const visualTypeOptions = Object.entries(visualizationType).map(
    ([key, value]) => ({
      value,
      label: t(`visualType.${key}`),
    })
  );

  const isDatePickerDisabled = Boolean(!regionSelected || !visualType);

  useEffect(() => {
    const firstRegion = regions[0];

    if (firstTimeSetRegion && regions.length && firstRegion) {
      setRegionSelected(firstRegion.value);
      setFirstTimeSetRegion(false);
    }
  }, [regions, firstTimeSetRegion]);

  useEffect(() => {
    const firstDate = dates[0];

    if (firstTimeSetDate && dates.length && firstDate) {
      setDateSelected(firstDate.value);
      setFirstTimeSetDate(false);
    }
  }, [dates, firstTimeSetDate]);

  useEffect(() => {
    if (hasChangeSomething) {
      if (visualType === visualizationType.dayView && dates.length) {
        setHasChangeSomething(false);
        setDateSelected(dates[0].value);
      } else if (visualType === visualizationType.monthView && months.length) {
        setHasChangeSomething(false);
        setDateSelected(months[0].value);
      } else if (visualType === visualizationType.yearView && years.length) {
        setHasChangeSomething(false);
        setDateSelected(years[0].value);
      }
    }
  }, [dates, months, years]);

  return (
    <>
      <PickersWrapper>
        <PickerAndIconWrapper>
          <Icon
            size={15}
            name="business"
            color={COMMON_FIFTH_COLOR}
            style={{ paddingLeft: 10 }}
          />
          <Picker
            value={regionSelected}
            items={regions}
            onChange={(value) => {
              if (value) {
                setRegionSelected(value);
                setHasChangeSomething(true);
              }
            }}
            style={{ marginRight: 10, marginLeft: 10 }}
            placeholder={t("home.region")}
            borderColor={!regionSelected ? COMMON_ERROR_COLOR : null}
          />
        </PickerAndIconWrapper>
        <PickerAndIconWrapper>
          <Icon
            size={15}
            name="visibility"
            color={COMMON_FIFTH_COLOR}
            style={{ paddingLeft: 0 }}
          />
          <Picker
            items={visualTypeOptions}
            onChange={(type) => {
              if (type) {
                setVisualType(type);
                setHasChangeSomething(true);
              }
            }}
            value={visualType}
            style={{ marginRight: 10, marginLeft: 10 }}
            placeholder={t("home.viewBy")}
            disabled={!regionSelected}
          />
        </PickerAndIconWrapper>
        <PickerAndIconWrapper>
          <Icon size={15} name="today" color={COMMON_FIFTH_COLOR} />
          <Picker
            items={
              visualType === visualizationType.dayView
                ? dates
                : visualType === visualizationType.monthView
                ? months
                : years
            }
            onChange={(value) => {
              if (value) {
                setDateSelected(value);
              }
            }}
            value={dateSelected}
            style={{ marginRight: 10, marginLeft: 10 }}
            placeholder={
              visualType === visualizationType.dayView
                ? t("home.day")
                : visualType === visualizationType.monthView
                ? t("home.month")
                : t("home.year")
            }
            disabled={isDatePickerDisabled}
            borderColor={
              !dateSelected && !isDatePickerDisabled ? COMMON_ERROR_COLOR : null
            }
          />
        </PickerAndIconWrapper>
      </PickersWrapper>
    </>
  );
};
