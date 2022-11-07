import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {authReducer} from '../feature/auth/authSlice'
import {departmentReducer} from '../feature/department/departmentSlice'
import {rankReducer} from '../feature/rank/rankSlice'
import rootSaga from './rootSaga'
// import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  department: departmentReducer,
  rank: rankReducer,
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
