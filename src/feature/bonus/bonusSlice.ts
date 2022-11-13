import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface BonusState {
  loadding: boolean
}
const initialState: BonusState = {
  loadding: false,
}

const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    createBonus(state, action: PayloadAction<{name: string; value: string}>) {
      state.loadding = true
    },
    createBonusSucces(state) {
      state.loadding = false
    },
    createBonusFail(state) {
      state.loadding = false
    },
    updateBonus(
      state,
      action: PayloadAction<{_id: string; name: string; value: string}>
    ) {
      state.loadding = true
    },
    updateBonusSucces(state) {
      state.loadding = false
    },
    updateBonusFail(state) {
      state.loadding = false
    },
  },
})

export const bonusAction = bonusSlice.actions
export const bonusReducer = bonusSlice.reducer
