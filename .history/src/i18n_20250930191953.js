import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      "roy'hatdan o'tish": "Sign Up",
      "kirish": ""
    },
  },
  uz: {
    translation: {
      welcome: "Xush Kelibsiz",
      "ro'yhatdan o'tish": "Ro'yhatdan o'tish",
      "kirish"
    },
  },
  ru: {
    translation: {
      welcome: "Добро Пожаловать",
      "ro'yhatdan o'tish": "Регистрация",
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
