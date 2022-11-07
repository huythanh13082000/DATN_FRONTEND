import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface rankState {
  loading: boolean
}
const initialState: rankState = {
  loading: false,
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
