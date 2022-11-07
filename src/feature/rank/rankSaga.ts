import {PayloadAction} from '@reduxjs/toolkit'
import {message} from 'antd'
import {call, takeEvery} from 'redux-saga/effects'
import {rankApi} from '../../apis/rankApi'
import {RankModel} from '../../models/rank'
import {rankAction} from './rankSlice'

function* createRank(
  action: PayloadAction<{name: string; value: number; department: string}>
) {
  try {
    const rank: {description: string} = yield call(
      rankApi.createRank,
      action.payload
    )
    yield message.success(rank.description)
  } catch (error: any) {
    yield message.error(error.toString())
  }
}

function* updateRank(
  action: PayloadAction<{
    name?: string
    value?: number
    department?: string
    _id: string
  }>
) {
  try {
    const rank: {data: RankModel; description: string} = yield call(
      rankApi.updateRank,
      action.payload
    )
    yield message.success(rank.description)
  } catch (error: any) {
    yield message.error(error.toString())
  }
}

export default function* rankSaga() {
  yield takeEvery(rankAction.createRank.type, createRank)
  yield takeEvery(rankAction.updateRank.type, updateRank)
}
