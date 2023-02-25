import {languages as langs} from "../index.js";

export function t(lang, name) {
    if (!langs.includes(lang)) return "Language was not found.";
    const translation = require(`./translation_${lang}.json`);
    if (!translation) return "Translation file was not found.";
    if (!translation[name]) return "Translation text was not found.";
    return translation[name];
}