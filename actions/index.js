import axios from 'axios'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
// import locales files
import {es} from '../locales/es.json'
import {en} from '../locales/en.json'
export const translationsObject = {
  es: es,
  en: en
}

export const SHOW_ROOMS = 'SHOW_ROOMS'
export const SHOW_ROOM = 'SHOW_ROOM'
export const SHOW_EXCURSIONS = 'SHOW_EXCURSIONS'
export const SHOW_EXCURSION = 'SHOW_EXCURSION'
export const SHOW_MENUS = 'SHOW_MENUS'
export const SHOW_CATEGORIES_MENU = 'SHOW_CATEGORIES_MENU'
export const SHOW_WINES = 'SHOW_WINES'
export const SHOW_CATEGORIES_WINE = 'SHOW_CATEGORIES_WINE'
export const SHOW_GALLERY = 'SHOW_GALLERY'
export const SHOW_MENU_DAY = 'SHOW_MENU_DAY'

export function showRooms () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/rooms')
    .then((response) => {
      dispatch({ type: SHOW_ROOMS, payload: response.data.rooms })
    })
  }
}

export function showRoom (tagInput) {
  var URL = 'http://localhost:9000/api/room/'.concat(tagInput)
  return function (dispatch) {
    axios.get(URL)
      .then(response => {
        console.log(response)
        dispatch({ type: SHOW_ROOM, payload: response.data.room })
      })
      .catch((err) => {
        dispatch({ type: 'SHOW_ROOM_ERROR', payload: err })
      })
  }
}

export function showExcursions () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/excursions')
    .then((response) => {
      dispatch({ type: SHOW_EXCURSIONS, payload: response.data.excursions })
    })
  }
}

export function showExcursion (tagInput) {
  var URL = 'http://localhost:9000/api/excursion/'.concat(tagInput)
  return function (dispatch) {
    axios.get(URL)
      .then(response => {
        console.log(response)
        dispatch({ type: SHOW_EXCURSION, payload: response.data.excursion })
      })
      .catch((err) => {
        dispatch({ type: 'SHOW_EXCURSION_ERROR', payload: err })
      })
  }
}

export function showMenus () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/menus')
    .then((response) => {
      dispatch({ type: SHOW_MENUS, payload: response.data.menus })
    })
  }
}

export function showCategoriesMenu () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/categories-menu')
    .then((response) => {
      dispatch({ type: SHOW_CATEGORIES_MENU, payload: response.data.categories })
    })
  }
}

export function showWines () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/wines')
    .then((response) => {
      dispatch({ type: SHOW_WINES, payload: response.data.wines })
    })
  }
}

export function showCategoriesWine () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/categories-wine')
    .then((response) => {
      dispatch({ type: SHOW_CATEGORIES_WINE, payload: response.data.categories })
    })
  }
}

export function showGallery () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/gallery')
    .then((response) => {
      dispatch({ type: SHOW_GALLERY, payload: response.data.data })
    })
  }
}

export function showMenuDay () {
  return (dispatch, getState) => {
    axios.get('http://localhost:9000/api/menu-day')
    .then((response) => {
      dispatch({ type: SHOW_MENU_DAY, payload: response.data.menu })
    })
  }
}

export function translateWeb (tagInput) {
  return function (dispatch) {
    // syncTranslationWithStore(store)
    dispatch(loadTranslations(translationsObject))
    dispatch(setLocale('en'))
  }
}
