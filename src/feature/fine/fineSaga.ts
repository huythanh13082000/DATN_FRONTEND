import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import { fineApi } from '../../apis/fineApi';
import { fineAction } from './fineSlice';

function* createFine(action: PayloadAction<{name: string; value: string}>) {
  try {
    const data: {description: string} = yield call(
      fineApi.createFine,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updateFine(
  action: PayloadAction<{_id: string; name: string; value: string}>
) {
  try {
    const data: {description: string} = yield call(
      fineApi.updateFine,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

export default function* fineSaga() {
  yield takeEvery(fineAction.createFine.type, createFine)
  yield takeEvery(fineAction.updateFine.type, updateFine)
}
