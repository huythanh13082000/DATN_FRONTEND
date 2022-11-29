import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {dayOffApi} from '../../apis/dayOffApi'
import {dayOffAction} from './dayOffSlice'

function* createDayOff(
  action: PayloadAction<{personnel: string; dayOff: string; status: number}>
) {
  try {
    const data: {description: string} = yield call(
      dayOffApi.createDayOff,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}

function* updateDayOff(
  action: PayloadAction<{
    _id: string
    personnel: string
    dayOff: string
    status: number
  }>
) {
  try {
    const data: {description: string} = yield call(
      dayOffApi.updateDayOff,
      action.payload
    )
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}
export default function* dayOffSaga() {
  yield takeEvery(dayOffAction.createPersonnelDayOff.type, createDayOff)
  yield takeEvery(dayOffAction.updatePersonnelDayOff.type, updateDayOff)
}
