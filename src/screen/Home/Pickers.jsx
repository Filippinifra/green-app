import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { visualizationType } from "constants/const";
import { Picker } from "components/Picker";
import { useTownsOptions } from "hook/useTownsOptions";
import { useAvailableDatesOptions } from "hook/useAvailableDatesOptions";
import _ from "lodash";
import { Icon } from "react-native-elements";
import { COMMON_ERROR_COLOR, COMMON_FIFTH_COLOR } from "constants/palette";
import { PickersWrapper, PickerAndIconWrapper } from "./styles";

export const Pickers = ({
  townSelected,
  setTownSelected,
  dateSelected,
  setDateSelected,
  visualType,
  setVisualType,
}) => {
  const { t } = useTranslation();

  const [firstTimeSetTown, setFirstTimeSetTown] = useState(true);
  const [firstTimeSetDate, setFirstTimeSetDate] = useState(true);

  const { towns } = useTownsOptions();
  const { dates, months, years } = useAvailableDatesOptions(
    townSelected,
    visualType,
    t("monthsShort", { returnObjects: true })
  );

  const visualTypeOptions = Object.entries(visualizationType).map(
    ([key, value]) => ({
      value,
      label: t(`visualType.${key}`),
    })
  );

  const isDatePickerDisabled = Boolean(!townSelected || !visualType);

  useEffect(() => {
    const firstTown = towns[0];

    if (firstTimeSetTown && towns.length && firstTown) {
      setTownSelected(firstTown.value);
      setFirstTimeSetTown(false);
    }
  }, [towns, firstTimeSetTown]);

  useEffect(() => {
    const firstDate = dates[0];

    if (firstTimeSetDate && dates.length && firstDate) {
      setDateSelected(firstDate.value);
      setFirstTimeSetDate(false);
    }
  }, [dates, firstTimeSetDate]);

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
            value={townSelected}
            items={towns}
            onChange={(value) => {
              if (value) {
                setDateSelected(null);
                setTownSelected(value);
              }
            }}
            style={{ marginRight: 10, marginLeft: 10 }}
            placeholder={t("home.town")}
            borderColor={!townSelected ? COMMON_ERROR_COLOR : null}
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
                setDateSelected(null);
                setVisualType(type);
              }
            }}
            value={visualType}
            style={{ marginRight: 10, marginLeft: 10 }}
            placeholder={t("home.viewBy")}
            disabled={!townSelected}
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
