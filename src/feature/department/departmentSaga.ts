import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {departmentApi} from '../../apis/departmentApi'
import {departmentAction} from './departmentSlice'

function* updateDepartment(action: PayloadAction<{_id: string; name: string}>) {
  try {
    const messageUpdate: string = yield call(
      departmentApi.updateDepartment,
      action.payload
    )
    yield message.success(messageUpdate)
  } catch (error) {
    yield message.error('lỗi')
  }
}
function* createDepartment(action: PayloadAction<{name: string}>) {
  try {
    const messageUpdate: string = yield call(
      departmentApi.createDepartment,
      action.payload
    )
    yield message.success(messageUpdate)
  } catch (error) {
    yield message.error('lỗi')
  }
}

export function* departmentSaga() {
  yield takeEvery(departmentAction.updateDepartment.type, updateDepartment)
  yield takeEvery(departmentAction.createDepartment.type, createDepartment)
}
