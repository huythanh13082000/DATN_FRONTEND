import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {bonusApi} from '../../apis/bonusApi'
import {personnelBonusApi} from '../../apis/personnelBonusApi'
import {bonusAction} from './bonusSlice'

function* createBonus(action: PayloadAction<{name: string; value: string}>) {
  try {
    const data: {description: string} = yield call(
      bonusApi.createBonus,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updateBonus(
  action: PayloadAction<{_id: string; name: string; value: string}>
) {
  try {
    const data: {description: string} = yield call(
      bonusApi.updateBonus,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}
function* createPersonnelBonus(
  action: PayloadAction<{
    personnel: string
    bonus: string
    dateBonus: string
  }>
) {
  try {
    const data: {description: string} = yield call(
      personnelBonusApi.createPersonnelBonus,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updatePersonnelBonus(
  action: PayloadAction<{
    _id: string
    personnel: string
    bonus: string
    dateBonus: string
  }>
) {
  try {
    const data: {description: string} = yield call(
      personnelBonusApi.updatePersonnelBonus,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

export default function* bonusSaga() {
  yield takeEvery(bonusAction.createBonus.type, createBonus)
  yield takeEvery(bonusAction.updateBonus.type, updateBonus)
  yield takeEvery(bonusAction.createPersonnelBonus.type, createPersonnelBonus)
  yield takeEvery(bonusAction.updatePersonnelBonus.type, updatePersonnelBonus)
}
