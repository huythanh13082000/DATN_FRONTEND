import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {allowanceReducer} from '../feature/allowance/allowanceSlice'
import {authReducer} from '../feature/auth/authSlice'
import {bonusReducer} from '../feature/bonus/bonusSlice'
import {departmentReducer} from '../feature/department/departmentSlice'
import {fineReducer} from '../feature/fine/fineSlice'
import {personnelReducer} from '../feature/personnel/personnelSlice'
import {rankReducer} from '../feature/rank/rankSlice'
import {timeSheetReducer} from '../feature/timeSheet/timeSheetSlice'
import rootSaga from './rootSaga'
// import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  department: departmentReducer,
  rank: rankReducer,
  personnel: personnelReducer,
  timeSheet: timeSheetReducer,
  bonus: bonusReducer,
  allowance: allowanceReducer,
  fine: fineReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
