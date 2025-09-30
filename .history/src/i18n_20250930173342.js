// import i18n from "i18next";
import i18n from "i18n";
// import { initReactI18next } from "react-i18next";
import { initReactI18next } from "react-i18next";
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
