import React, { useEffect, useState } from "react";
import { getStorageItem, STORAGE_LANG_KEY } from "utils/storage";
import i18n from "text/i18n";
import { IntroAnimation } from "components/IntroAnimation";
import { Router } from "components/Router";
import { isMockingServer } from "constants/featureFlag";
import { runMockServer } from "mockedApi";

if (isMockingServer) {
  runMockServer();
}

export const Code = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getStorageItem(STORAGE_LANG_KEY, (value) => {
      i18n.changeLanguage(value);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  return (
    <IntroAnimation loaded={loaded}>
      <Router />
    </IntroAnimation>
  );
};
