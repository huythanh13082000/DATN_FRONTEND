import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RankModel} from '../../models/rank'

export interface rankState {
  loading: boolean
  listRank: RankModel[]
}
const initialState: rankState = {
  loading: false,
  listRank: [],
}

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {
    createRank(
      state,
      action: PayloadAction<{name: string; value: number; department: string}>
    ) {
      state.loading = true
    },
    createRankSuccess(state) {
      state.loading = false
    },
    createRankFail(state) {
      state.loading = false
    },
    getListRank(state) {
      state.loading = true
    },
    getListRankSuccess(state, action: PayloadAction<RankModel[]>) {
      state.listRank = action.payload
      state.loading = false
    },
    getListRankFail(state) {
      state.loading = false
    },
    updateRank(
      state,
      action: PayloadAction<{
        _id: string
        name?: string
        value?: number
        department?: string
      }>
    ) {
      state.loading = true
    },
    updateRankSuccess(state) {
      state.loading = false
    },
    updateRankFail(state) {
      state.loading = false
    },
  },
})

export const rankAction = rankSlice.actions
export const rankReducer = rankSlice.reducer
