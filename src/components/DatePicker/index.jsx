import React, { useState } from "react";
import { TouchElement } from "components/TouchElement";
import { Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { COMMON_FIFTH_COLOR } from "constants/palette";
import { PickerWrapper } from "./styles";

export const DatePicker = ({
  date,
  onChange,
  minimumDate,
  maximumDate,
  style,
  placeholder,
  disabled,
}) => {
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <TouchElement
      onPress={() => {
        disabled ? null : setVisible(true);
      }}
    >
      <PickerWrapper style={{ ...style }}>
        {date ? (
          <Text numberOfLines={1}>{moment(date).format("DD/MM/YYYY")}</Text>
        ) : (
          <Text style={{ color: COMMON_FIFTH_COLOR }}>
            {placeholder || t("general.placeholderPicker")}
          </Text>
        )}
      </PickerWrapper>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        value={new Date(date)}
        onCancel={() => setVisible(false)}
        onConfirm={(value) => {
          onChange(value);
          setVisible(false);
        }}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        headerTextIOS={t("home.selectTheDate")}
      />
    </TouchElement>
  );
};
