import { COMMON_FOURTH_COLOR } from "constants/palette";
import React from "react";
import { useTranslation } from "react-i18next";
import RNPickerSelect from "react-native-picker-select";
import { PickerWrapper } from "./styles";

export const Picker = ({
  style,
  items,
  onChange,
  value,
  placeholder,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <PickerWrapper style={style}>
      <RNPickerSelect
        onValueChange={onChange}
        value={value}
        items={items}
        placeholder={{
          value: null,
          label: placeholder || t("general.placeholderPicker"),
          color: COMMON_FOURTH_COLOR,
        }}
        disabled={disabled}
      />
    </PickerWrapper>
  );
};
