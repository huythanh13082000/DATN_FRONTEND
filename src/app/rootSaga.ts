import {all} from 'redux-saga/effects'
import AllowanceSaga from '../feature/allowance/allowanceSaga'
import authSaga from '../feature/auth/authSaga'
import bonusSaga from '../feature/bonus/bonusSaga'
import {departmentSaga} from '../feature/department/departmentSaga'
import personnelSaga from '../feature/personnel/personnelSaga'
import rankSaga from '../feature/rank/rankSaga'
import {timeSheetSaga} from '../feature/timeSheet/timeSheetSaga'

export default function* rootSaga() {
  yield all([
    authSaga(),
    departmentSaga(),
    rankSaga(),
    personnelSaga(),
    timeSheetSaga(),
    bonusSaga(),
    AllowanceSaga(),
  ])
}
