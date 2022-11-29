import {all} from 'redux-saga/effects'
import AllowanceSaga from '../feature/allowance/allowanceSaga'
import authSaga from '../feature/auth/authSaga'
import bonusSaga from '../feature/bonus/bonusSaga'
import dayOffSaga from '../feature/dayOff/dayOffSaga'
import {departmentSaga} from '../feature/department/departmentSaga'
import fineSaga from '../feature/fine/fineSaga'
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
    fineSaga(),
    dayOffSaga(),
  ])
}
