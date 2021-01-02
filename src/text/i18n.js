import { DEFAULT_LANG } from "constants/config";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ecoTips } from "./tips";

i18n.use(initReactI18next).init({
  initImmediate: false,
  lng: DEFAULT_LANG,
  resources: {
    en: {
      translation: {
        general: {
          errorOccoured: "An error occoured",
          placeholderPicker: "Select an option",
        },
        news: { viewMore: "View more" },
        home: {
          maxConsumption: "MAX consumption",
          minConsumption: "Min consumption",
          energyConsumption: "Energy consumption",
          town: "Town",
          viewBy: "View by",
          day: "Day",
          month: "Month",
          year: "Year",
          hoursTip: "{{hourAmPm}}",
        },
        ecoTips: ecoTips.en,
        visualType: {
          dayView: "By day",
          monthView: "By month",
          yearView: "By year",
        },
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    it: {
      translation: {
        general: {
          errorOccoured: "Qualcosa è andato storto",
          placeholderPicker: "Seleziona un'opzione",
        },
        news: { viewMore: "Leggi di più" },
        home: {
          maxConsumption: "MAX consumo",
          minConsumption: "Min consumo",
          energyConsumption: "Consumi energia",
          town: "Città",
          viewBy: "Visualizzazione",
          day: "Giorno",
          month: "Mese",
          year: "Anno",
          hoursTip: "Ore {{hour}}",
        },
        ecoTips: ecoTips.it,
        visualType: {
          dayView: "Per giorno",
          monthView: "Per mese",
          yearView: "Per anno",
        },
        monthsShort: [
          "Gen",
          "Feb",
          "Mar",
          "Apr",
          "Mag",
          "Giu",
          "Lug",
          "Ago",
          "Set",
          "Ott",
          "Nov",
          "Dic",
        ],
      },
    },
  },
});

export default i18n;
