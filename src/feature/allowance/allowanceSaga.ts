import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {allowanceApi} from '../../apis/allowanceApi'
import {allowanceAction} from './allowanceSlice'

function* createAllowance(
  action: PayloadAction<{name: string; value: string}>
) {
  try {
    const data: {description: string} = yield call(
      allowanceApi.createAllowance,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updateAllowance(
  action: PayloadAction<{_id: string; name: string; value: string}>
) {
  try {
    const data: {description: string} = yield call(
      allowanceApi.updateAllowance,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

export default function* AllowanceSaga() {
  yield takeEvery(allowanceAction.createAllowance.type, createAllowance)
  yield takeEvery(allowanceAction.updateAllowance.type, updateAllowance)
}
