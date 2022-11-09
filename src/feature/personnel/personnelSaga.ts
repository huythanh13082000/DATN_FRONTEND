import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {CreatePersonnel, personnelApi} from '../../apis/personnelApi'
import {personnelAction} from './personnelSlice'

function* createPersonnel(action: PayloadAction<FormData>) {
  try {
    const messageCreate: {description: string} = yield call(
      personnelApi.createPersonnel,
      action.payload
    )
    yield message.success(messageCreate.description)
  } catch (error: any) {
    yield message.error(error.toString())
  }
}
function* updatePersonnel(action: PayloadAction<FormData>) {
  try {
    const messageupdate: {description: string} = yield call(
      personnelApi.updatePersonnel,
      action.payload
    )
    yield message.success(messageupdate.description)
  } catch (error: any) {
    yield message.error(error.toString())
  }
}

export default function* personnelSaga() {
  yield takeEvery(personnelAction.createPersonnel.type, createPersonnel)
  yield takeEvery(personnelAction.updatePersonnel.type, updatePersonnel)
}
