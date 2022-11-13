import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {TimeSeriesScale} from 'chart.js'
import {call, put, takeEvery} from 'redux-saga/effects'
import {timeSheetApi} from '../../apis/timeSheetApi'
import {PersonnelModel} from '../../models/personnel'
import {TimeSheetModel} from '../../models/timeSheetModel'
import {timeSheetAction} from './timeSheetSlice'

// function* getListPersonnelTimeSheet() {
//   try {
//     const res: {data: PersonnelModel[]} = yield call(
//       timeSheetApi.getListPersonnelTimeSheet
//     )
//     yield put(timeSheetAction.getListPersonnelTimeSheetSuccess(res.data))
//   } catch (error) {
//     yield put(timeSheetAction.getListPersonnelTimeSheetFail())
//   }
// }
function* createTimeSheets(action: PayloadAction<{workingday: string}>) {
  try {
    const data: {data: TimeSheetModel[]; description: string} = yield call(
      timeSheetApi.createTimeSheets,
      action.payload
    )
    yield put(timeSheetAction.createTimeSheetsSuccess(data.data))
    yield message.success(data.description)
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}
function* updateTimeSheet(
  action: PayloadAction<{_id: string; status: number}>
) {
  try {
    console.log(66666, action.payload)
    const data: {data: TimeSheetModel; description: string} = yield call(
      timeSheetApi.updateTimeSheet,
      action.payload
    )
    console.log(9999, data)
    const data1: {data: TimeSheetModel[]; description: string} = yield call(
      timeSheetApi.createTimeSheets,
      {workingday: data.data.workingDay}
    )
    yield put(timeSheetAction.createTimeSheetsSuccess(data1.data))
  } catch (error: any) {
    yield message.error(error.response.message)
  }
}
export function* timeSheetSaga() {
  yield takeEvery(timeSheetAction.createTimeSheets.type, createTimeSheets)
  yield takeEvery(timeSheetAction.updateTimeSheet.type, updateTimeSheet)
}
