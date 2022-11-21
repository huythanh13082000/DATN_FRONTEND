import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {fineApi} from '../../apis/fineApi'
import {personnelFineApi} from '../../apis/personnelFineApi'
import {fineAction} from './fineSlice'

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

function* createPersonnelFine(
  action: PayloadAction<{
    personnel: string
    fine: string
    dateFine: string
  }>
) {
  try {
    const data: {description: string} = yield call(
      personnelFineApi.createPersonnelFine,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updatePersonnelFine(
  action: PayloadAction<{
    _id: string
    personnel: string
    fine: string
    dateFine: string
  }>
) {
  try {
    const data: {description: string} = yield call(
      personnelFineApi.updatePersonnelFine,
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
  yield takeEvery(fineAction.createPersonnelFine.type, createPersonnelFine)
  yield takeEvery(fineAction.updatePersonnelFine.type, updatePersonnelFine)
}
