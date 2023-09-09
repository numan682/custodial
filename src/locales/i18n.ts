import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en/translation.json'
import fr from './fr/translation.json'
import sl from './sl/translation.json'
import tr from './tr/translation.json'

export const translationsJson = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  sl: {
    translation: sl,
  },
  tr: {
    translation: tr,
  },
}

export const languageLabels: [keyof typeof translationsJson, string][] = [
  ['en', 'English'],
  ['fr', 'Français'],
  ['sl', 'Slovenščina'],
  ['tr', 'Türkçe'],
]

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      // Fix Google Translate issue: https://github.com/facebook/react/issues/11538#issuecomment-390386520
      // Fix from https://react.i18next.com/latest/trans-component#i18next-options
      transWrapTextNodes: 'span',
    },
  })
