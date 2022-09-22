import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "l2FvITpSc9x3BoPkJJJfrw";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "no",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["no", "en"],

    backend: {
      loadPath: loadPath,
    },
  });
