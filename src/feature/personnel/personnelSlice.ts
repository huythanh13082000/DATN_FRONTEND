import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreatePersonnel} from '../../apis/personnelApi'

interface PersonnelState {
  loadding: boolean
}
const initialState: PersonnelState = {
  loadding: false,
}

const personnelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    createPersonnel(state, action: PayloadAction<FormData>) {
      state.loadding = true
    },
    createPersonnelSuccess(state) {
      state.loadding = false
    },
    createPersonnelFail(state) {
      state.loadding = false
    },
    updatePersonnel(state, action: PayloadAction<FormData>) {
      state.loadding = true
    },
    updatePersonnelSuccess(state) {
      state.loadding = false
    },
    updatePersonnelFail(state) {
      state.loadding = false
    },
  },
})

export const personnelAction = personnelSlice.actions

export const personnelReducer = personnelSlice.reducer
