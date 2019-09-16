// Global imports
import { initReactI18next } from "react-i18next";
// Local imports
import i18next from "i18next";

import { en, tr, es } from "@I18n/Languages";

const languageDetector = {
    type: "languageDetector",
    async: true,
    detect: cb => cb("en"),
    init: () => {},
    cacheUserLanguage: () => {},
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        resources: {
            en: {
                translation: en,
            },
            tr: {
                translation: tr,
            },
            es: {
                translation: es,
            },
        },
    });

export const I18n = i18next;
