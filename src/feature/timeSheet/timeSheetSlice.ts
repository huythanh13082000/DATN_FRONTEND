import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import { TimeSheetModel } from '../../models/timeSheetModel'

export interface timeSheetState {
  loadding: boolean
  listTimeSheet?: TimeSheetModel[]
}

const initialState: timeSheetState = {
  loadding: false,
}

const timeSheetSlice = createSlice({
  name: 'timeSheet',
  initialState,
  reducers: {
    // getListPersonnelTimeSheet(state) {
    //   state.loadding = true
    // },
    // getListPersonnelTimeSheetSuccess(
    //   state,
    //   action: PayloadAction<PersonnelModel[]>
    // ) {
    //   state.loadding = false
    //   state.listPersonnelTimeSheet = action.payload
    // },
    // getListPersonnelTimeSheetFail(state) {
    //   state.loadding = false
    // },
    createTimeSheets(state, action: PayloadAction<{workingDay: string}>) {
      state.loadding = true
    },
    createTimeSheetsSuccess(state, action: PayloadAction<TimeSheetModel[]>) {
      state.loadding = false
      state.listTimeSheet = action.payload
    },
    createTimeSheetsFail(state) {
      state.loadding = false
    },
    updateTimeSheet(state,action:PayloadAction<{_id:string;status:number}>){
      state.loadding = true
    },
    updateTimeSheetSuccess(state,action:PayloadAction<{_id:string;status:number}>){
      state.loadding = false
    },
    updateTimeSheetFail(state,action:PayloadAction<{_id:string;status:number}>){
      state.loadding = false
    }
  },
})

export const timeSheetAction = timeSheetSlice.actions
export const selectListTimeSheet = (state: RootState) =>
  state.timeSheet.listTimeSheet
export const timeSheetReducer = timeSheetSlice.reducer
