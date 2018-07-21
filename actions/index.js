import axios from 'axios'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
// import locales files
import {es} from '../locales/es.json'
import {en} from '../locales/en.json'
export const translationsObject = {
  es: es,
  en: en
}

export function translateWeb (tagInput) {
  return function (dispatch) {
    // syncTranslationWithStore(store)
    dispatch(loadTranslations(translationsObject))
    dispatch(setLocale('en'))
  }
}
