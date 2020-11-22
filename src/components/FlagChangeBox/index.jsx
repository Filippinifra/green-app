import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { LANGUAGES, MAP_LANGUAGES_TO_FLAGS } from "constants/config";
import { FlagImage } from "./styles";
import i18n from "text/i18n";

export const FlagChangeBox = () => {
  const currentLang = i18n.language;

  const [flagNation, setFlagNation] = useState(
    MAP_LANGUAGES_TO_FLAGS[currentLang]
  );

  const changeLang = () => {
    const currentLang = i18n.language;
    const indexLang = LANGUAGES.indexOf(currentLang);
    if (indexLang === LANGUAGES.length - 1) {
      const newLang = LANGUAGES[0];
      setFlagNation(MAP_LANGUAGES_TO_FLAGS[newLang]);
      i18n.changeLanguage(newLang);
    } else {
      const newLang = LANGUAGES[indexLang + 1];
      setFlagNation(MAP_LANGUAGES_TO_FLAGS[newLang]);
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <TouchableOpacity onPress={changeLang} activeOpacity={1}>
      <FlagImage source={flagNation} />
    </TouchableOpacity>
  );
};
