import {all} from 'redux-saga/effects'
import authSaga from '../feature/auth/authSaga'
import { departmentSaga } from '../feature/department/departmentSaga'

export default function* rootSaga() {
  yield all([authSaga(),departmentSaga()])
}
