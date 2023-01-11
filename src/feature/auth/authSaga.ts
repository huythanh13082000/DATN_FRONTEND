import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, put, take, takeEvery} from 'redux-saga/effects'
import {authApi} from '../../apis/authApi'
import {UserModel} from '../../models/user.model'
import {LOCAL_STORAGE} from '../../utils/constants'
import {authActions} from './authSlice'

function* login(action: PayloadAction<{email: string; passWord: string}>) {
  try {
    const token: {
      accessToken: string
      refreshToken: string
      exp: string
      role: string
    } = yield call(authApi.login, action.payload)
    yield localStorage.setItem(LOCAL_STORAGE.TOKEN, token.accessToken)
    yield localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN, token.refreshToken)
    yield localStorage.setItem(LOCAL_STORAGE.EXP, token.exp)
    yield localStorage.setItem(LOCAL_STORAGE.ROLE, token.role)
    yield put(authActions.loginSuccess())
  } catch (error: any) {
    yield message.error('Tài khoản hoặc mật khẩu không chính xác!')
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
    message.error('Mật khẩu không đúng!')
  }
}

function* createUser(
  action: PayloadAction<{email: string; passWord: string; role: string}>
) {
  try {
    const data: {description: string} = yield call(
      authApi.createUser,
      action.payload
    )
    yield put(authActions.createUserSuccess())
    yield message.success(data.description)
  } catch (error: any) {
    console.log(error)
    yield message.error(error.response.data.description)
  }
}
function* updateUser(
  action: PayloadAction<{email: string; _id: string; role: string}>
) {
  try {
    const data: {description: string} = yield call(
      authApi.updateUser,
      action.payload
    )
    yield put(authActions.updateUserSuccess())
    yield message.success(data.description)
  } catch (error: any) {
    console.log(error)
    yield message.error(error.response.data.description)
  }
}

export default function* authSaga() {
  yield takeEvery(authActions.login.type, login)
  yield takeEvery(authActions.getProfile.type, getProfile)
  yield takeEvery(authActions.changePassWord.type, changePassWord)
  yield takeEvery(authActions.createUser.type, createUser)
  yield takeEvery(authActions.updateUser.type, updateUser)
}
