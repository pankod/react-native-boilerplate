// Global imports
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

// #region Local imports
import * as resources from "@I18n/locales";
// #endregion Local imports

const languageDetector = {
    type: "languageDetector",
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
        debug: true,
        resources: resources.default,
        ns: ["common"],
        defaultNS: "common",
    });

export const I18n = i18next;
