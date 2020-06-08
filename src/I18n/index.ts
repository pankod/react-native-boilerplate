import { initReactI18next } from "react-i18next";
import i18next from "i18next";

import resources from "@I18n/locales";

const languageDetector = {
    type: "languageDetector" as "languageDetector",
    async: true,
    detect: (cb: Function) => cb("en"),
    init: () => {},
    cacheUserLanguage: () => {},
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources,
        ns: ["common"],
        defaultNS: "common",
    });

export const I18n = i18next;
