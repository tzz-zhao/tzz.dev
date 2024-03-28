import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        if (key in ui[lang]) {
            return (ui[lang] as any)[key];
        } else {
            return ui[defaultLang][key];
        }
    }
}