import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { portfolioPtbr } from "./language/pt-br";
import { portfolioEnus } from "./language/en-us";

i18n.use(initReactI18next).init({
    resources: {
        pt: { translation: portfolioPtbr },
        en: { translation: portfolioEnus },
    },
    lng: localStorage.getItem("portfolio-lang") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;