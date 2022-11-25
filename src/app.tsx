import i18next from 'i18next'
import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './app.css'
import {useAppDispatch, useAppSelector} from './app/hooks'
import DashboardLayout from './components/layout/DashboardLayout'
import {authActions, selectUser} from './feature/auth/authSlice'
import Login from './pages/login'
import Router from './routers'
import {Config, IS_LOGGED, LOCAL_STORAGE} from './utils/constants'

const App: React.FC = () => {
  i18next.changeLanguage('en')
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authActions.getProfile())
  }, [dispatch])
  return <BrowserRouter>{<Router />}</BrowserRouter>
}

export default App
