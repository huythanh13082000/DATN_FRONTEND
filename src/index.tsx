import React, {Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './app'
import './i18n'
import i18next from 'i18next'

const container = document.getElementById('root')!
const root = createRoot(container)
i18next.changeLanguage('ko')

root.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
