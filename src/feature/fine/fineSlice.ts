import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface FineState {
  loadding: boolean
}
const initialState: FineState = {
  loadding: false,
}

const fineSlice = createSlice({
  name: 'fine',
  initialState,
  reducers: {
    createFine(state, action: PayloadAction<{name: string; value: string}>) {
      state.loadding = true
    },
    createFineSucces(state) {
      state.loadding = false
    },
    createFineFail(state) {
      state.loadding = false
    },
    createPersonnelFine(
      state,
      action: PayloadAction<{
        personnel: string
        fine: string
        dateFine: string
      }>
    ) {
      state.loadding = true
    },
    createPersonnelFineSucces(state) {
      state.loadding = false
    },
    createPersonnelFineFail(state) {
      state.loadding = false
    },
    updateFine(
      state,
      action: PayloadAction<{_id: string; name: string; value: string}>
    ) {
      state.loadding = true
    },
    updateFineSucces(state) {
      state.loadding = false
    },
    updateFineFail(state) {
      state.loadding = false
    },
    updatePersonnelFine(
      state,
      action: PayloadAction<{
        _id: string
        personnel: string
        fine: string
        dateFine: string
      }>
    ) {
      state.loadding = true
    },
    updatePersonnelFineSucces(state) {
      state.loadding = false
    },
    updatePersonnelFineFail(state) {
      state.loadding = false
    },
  },
})

export const fineAction = fineSlice.actions
export const fineReducer = fineSlice.reducer
