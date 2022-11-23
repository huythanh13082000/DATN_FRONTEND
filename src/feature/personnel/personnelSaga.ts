import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, put, takeEvery} from 'redux-saga/effects'
import {CreatePersonnel, personnelApi} from '../../apis/personnelApi'
import {PersonnelModel} from '../../models/personnel'
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

function* getListPersonnel() {
  try {
    const listPersonnel: {list: PersonnelModel[]; description: string} =
      yield call(personnelApi.getListPersonnel)
    console.log(8907, listPersonnel)
    yield put(personnelAction.getListPersonnelSucces(listPersonnel.list))
    // yield message.success(messageupdate.description)
  } catch (error: any) {
    yield message.error(error.toString())
    yield put(personnelAction.getListPersonnelFail())
  }
}

export default function* personnelSaga() {
  yield takeEvery(personnelAction.createPersonnel.type, createPersonnel)
  yield takeEvery(personnelAction.updatePersonnel.type, updatePersonnel)
  yield takeEvery(personnelAction.getListPersonnel.type, getListPersonnel)
}
