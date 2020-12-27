import { DEFAULT_LANG } from "constants/config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  initImmediate: false,
  lng: DEFAULT_LANG,
  resources: {
    en: {
      translation: {
        general: { errorOccoured: "An error occoured" },
        news: { viewMore: "View more" },
        home: {
          maxConsumption: "MAX consumption",
          minConsumption: "Min consumption",
          maxDailyConsumption: "National daily consumption",
        },
      },
    },
    it: {
      translation: {
        general: { errorOccoured: "Qualcosa è andato storto" },
        news: { viewMore: "Leggi di più" },
        home: {
          maxConsumption: "MAX consumi",
          minConsumption: "Min consumi",
          maxDailyConsumption: "Consumi giornalieri nazionali",
        },
      },
    },
  },
});

export default i18n;
