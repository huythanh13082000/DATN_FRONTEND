import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserModel} from '../../models/user.model'

interface authState {
  loadding: boolean
  user: UserModel | undefined
}
const initialState: authState = {
  loadding: false,
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
      state.loadding = false
    },
    loginFaile(state) {
      state.loadding = false
    },
  },
})
