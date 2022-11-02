import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {UserModel} from '../../models/user.model'

interface authState {
  loadding: boolean
  loginStatus: boolean
  user: UserModel | undefined
}
const initialState: authState = {
  loadding: false,
  loginStatus: false,
  user: undefined,
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
    getProfile(state) {
      state.loadding = true
    },
    getProfileSuccess(state, action: PayloadAction<UserModel>) {
      state.user = action.payload
      state.loadding = false
    },
    getProfileFail(state) {
      state.loadding = false
    },
    setLoginStatus(state, action: PayloadAction<boolean>) {
      state.loginStatus = action.payload
    },
    changePassWord(
      state,
      action: PayloadAction<{newPassWord: string; oldPassWord: string}>
    ) {},
  },
})

export const authActions = authSlice.actions

export const selectLoginStatus = (state: RootState) => state.auth.loginStatus
export const selectUser = (state: RootState) => state.auth.user

export const authReducer = authSlice.reducer
