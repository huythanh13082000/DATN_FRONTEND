import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, put, take, takeEvery} from 'redux-saga/effects'
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

function* getProfile() {
  try {
    const user: UserModel = yield call(authApi.getProfile)
    yield put(authActions.getProfileSuccess(user))
  } catch (error) {
    console.log(error)
    yield put(authActions.getProfileFail())
  }
}
function* changePassWord(
  action: PayloadAction<{newPassWord: string; oldPassWord: string}>
) {
  try {
    const mess: {description: string} = yield call(
      authApi.changePassWord,
      action.payload
    )
    yield message.success(mess.description)
  } catch (error: any) {
    yield message.error(error.response.data.description)
  }
}

export default function* authSaga() {
  yield takeEvery(authActions.login.type, login)
  yield takeEvery(authActions.getProfile.type, getProfile)
  yield takeEvery(authActions.changePassWord.type, changePassWord)
}
