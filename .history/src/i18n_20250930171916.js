import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
    },
  },
  uz: {
    translation: {
      welcome: "Xush Kelibsiz",
    },
  },
  ru: {
    translation: {
      welcome: "Добро Пожаловать",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
