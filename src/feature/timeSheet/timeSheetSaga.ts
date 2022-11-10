import {call, put, takeEvery} from 'redux-saga/effects'
import {timeSheetApi} from '../../apis/timeSheetApi'
import {PersonnelModel} from '../../models/personnel'
import {timeSheetAction} from './timeSheetSlice'

function* getListPersonnelTimeSheet() {
  try {
    const res: {data: PersonnelModel[]} = yield call(
      timeSheetApi.getListPersonnelTimeSheet
    )
    yield put(timeSheetAction.getListPersonnelTimeSheetSuccess(res.data))
  } catch (error) {
    yield put(timeSheetAction.getListPersonnelTimeSheetFail())
  }
}

export function* timeSheetSaga() {
  yield takeEvery(
    timeSheetAction.getListPersonnelTimeSheet.type,
    getListPersonnelTimeSheet
  )
}
