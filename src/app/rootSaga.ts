import {all} from 'redux-saga/effects'
import authSaga from '../feature/auth/authSaga'
import { departmentSaga } from '../feature/department/departmentSaga'
import rankSaga from '../feature/rank/rankSaga'

export default function* rootSaga() {
  yield all([authSaga(),departmentSaga(),rankSaga()])
}
