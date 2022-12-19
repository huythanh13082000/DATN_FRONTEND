import i18next from 'i18next'
import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './app.css'
import Router from './routers'

const App: React.FC = () => {
  i18next.changeLanguage('en')
  return <BrowserRouter>{<Router />}</BrowserRouter>
}

export default App
