import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {UserModel} from '../../models/user.model'

interface authState {
  loadding: boolean
  loginStatus: boolean
}
const initialState: authState = {
  loadding: false,
  loginStatus: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{username: string; passWord: string}>) {
      state.loadding = true
    },
    loginSuccess(state) {
      state.loginStatus = true
      state.loadding = false
    },
    loginFaile(state) {
      state.loadding = false
      state.loginStatus = false
    },
  },
})

export const authActions = authSlice.actions

export const selectLoginStatus = (state:RootState)=> state.auth.loginStatus

export const authReducer = authSlice.reducer
