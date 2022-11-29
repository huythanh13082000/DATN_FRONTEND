import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface DayOffState {
  loadding: boolean
}
const initialState: DayOffState = {
  loadding: false,
}

const dayOffSlice = createSlice({
  name: 'dayOff',
  initialState,
  reducers: {
    createPersonnelDayOff(
      state,
      action: PayloadAction<{personnel: string; dayOff: string; status: number}>
    ) {
      state.loadding = true
    },
    createPersonnelDayOffSucces(state) {
      state.loadding = false
    },
    createPersonnelDayOffFail(state) {
      state.loadding = false
    },
    updatePersonnelDayOff(
      state,
      action: PayloadAction<{_id:string,personnel: string; dayOff: string; status: number}>
    ) {
      state.loadding = true
    },
    updatePersonnelDayOffSucces(state) {
      state.loadding = false
    },
    updatePersonnelDayOffFail(state) {
      state.loadding = false
    },
  },
})

export const dayOffAction = dayOffSlice.actions
export const dayOffReducer = dayOffSlice.reducer

