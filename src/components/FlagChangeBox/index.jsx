import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  DEFAULT_LANG,
  LANGUAGES,
  MAP_LANGUAGES_TO_FLAGS,
} from "constants/config";
import { FlagImage } from "./styles";
import i18n from "text/i18n";
import {
  getStorageItem,
  setStorageItem,
  STORAGE_LANG_KEY,
} from "utils/storage";

export const FlagChangeBox = () => {
  const [flagNation, setFlagNation] = useState(null);
  const [loading, setLoading] = useState(false);

  const setLang = (newLang) => {
    setFlagNation(MAP_LANGUAGES_TO_FLAGS[newLang]);
    setStorageItem(STORAGE_LANG_KEY, newLang);
    i18n.changeLanguage(newLang);
  };

  const changeLang = () => {
    setLoading(true);
    const currentLang = i18n.language;
    const indexLang = LANGUAGES.indexOf(currentLang);

    if (indexLang === LANGUAGES.length - 1) {
      setLang(LANGUAGES[0]);
    } else {
      setLang(LANGUAGES[indexLang + 1]);
    }
  };

  useEffect(() => {
    getStorageItem(
      STORAGE_LANG_KEY,
      (value) => setFlagNation(MAP_LANGUAGES_TO_FLAGS[value]),
      () => {
        setFlagNation(MAP_LANGUAGES_TO_FLAGS[DEFAULT_LANG]);
      }
    );
  }, []);

  i18n.on("languageChanged", (lng) =>
    setFlagNation(MAP_LANGUAGES_TO_FLAGS[lng])
  );

  return (
    <TouchableOpacity onPress={changeLang} activeOpacity={1}>
      <FlagImage
        source={flagNation}
        onLoad={() => setLoading(false)}
        style={{ opacity: loading ? 0.7 : 1 }}
      />
    </TouchableOpacity>
  );
};
