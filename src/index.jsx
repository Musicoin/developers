import React from 'react'
import { render } from 'react-dom'
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n'

import Main from './common/main.component.jsx'
import Home from './home/component/home.jsx'

// import locales files
import {es} from '../locales/es.json'
import {en} from '../locales/en.json'
export const translationsObject = {
  es: es,
  en: en
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// Language with react-redux-i18n
const store = createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
)
export { store }
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject))
store.dispatch(setLocale('es'))
console.log(localStorage.getItem('myLang'))
if (localStorage.getItem('myLang') !== '' || localStorage.getItem('myLang') !== null) {
  store.dispatch(setLocale(localStorage.getItem('myLang')))
}else {
  store.dispatch(setLocale('es'))
}

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route component={Main} >
        <Route exact path='/' component={Home} />
        <IndexRoute component={Home} />
        {/* <Route path='/nosotros' component={About} /> */}
      </Route>
    </Router>
  </Provider>
  ,

  document.getElementById('container')
)
