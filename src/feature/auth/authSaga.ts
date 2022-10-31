import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, put, takeEvery} from 'redux-saga/effects'
import {authApi} from '../../apis/authApi'
import {UserModel} from '../../models/user.model'
import {LOCAL_STORAGE} from '../../utils/constants'
import {authActions} from './authSlice'

function* login(action: PayloadAction<{username: string; passWord: string}>) {
  try {
    const token: {accessToken: string; refreshToken: string} = yield call(
      authApi.login,
      action.payload
    )
    yield put(authActions.loginSuccess())
    yield localStorage.setItem(LOCAL_STORAGE.TOKEN, token.accessToken)
    // console.log(token)
  } catch (error: any) {
    yield message.error(error.response.data.message)
  }
}

export default function* authSaga() {
  yield takeEvery(authActions.login.type, login)
}
