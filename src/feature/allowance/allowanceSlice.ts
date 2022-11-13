import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AllowanceState {
  loadding: boolean
}
const initialState: AllowanceState = {
  loadding: false,
}

const allowanceSlice = createSlice({
  name: 'allowance',
  initialState,
  reducers: {
    createAllowance(state, action: PayloadAction<{name: string; value: string}>) {
      state.loadding = true
    },
    createAllowanceSucces(state) {
      state.loadding = false
    },
    createAllowanceFail(state) {
      state.loadding = false
    },
    updateAllowance(
      state,
      action: PayloadAction<{_id: string; name: string; value: string}>
    ) {
      state.loadding = true
    },
    updateAllowanceSucces(state) {
      state.loadding = false
    },
    updateAllowanceFail(state) {
      state.loadding = false
    },
  },
})

export const allowanceAction = allowanceSlice.actions
export const allowanceReducer = allowanceSlice.reducer
