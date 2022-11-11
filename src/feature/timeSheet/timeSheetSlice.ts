import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import {PersonnelModel} from '../../models/personnel'

export interface timeSheetState {
  loadding: boolean
  listPersonnelTimeSheet?: PersonnelModel[]
}

const initialState: timeSheetState = {
  loadding: false,
}

const timeSheetSlice = createSlice({
  name: 'timeSheet',
  initialState,
  reducers: {
    getListPersonnelTimeSheet(state) {
      state.loadding = true
    },
    getListPersonnelTimeSheetSuccess(
      state,
      action: PayloadAction<PersonnelModel[]>
    ) {
      state.loadding = false
      state.listPersonnelTimeSheet = action.payload
    },
    getListPersonnelTimeSheetFail(state) {
      state.loadding = false
    },
    timeSheetCheckDate(state, action: PayloadAction<{workingDay: string}>) {
      state.loadding = true
    },
    timeSheetCheckDateSuccess(state) {
      state.loadding = false
    },
    timeSheetCheckDateFail(state) {
      state.loadding = false
    },
  },
})

export const timeSheetAction = timeSheetSlice.actions
export const selectListPersonnelTimeSheet = (state: RootState) =>
  state.timeSheet.listPersonnelTimeSheet
export const timeSheetReducer = timeSheetSlice.reducer
