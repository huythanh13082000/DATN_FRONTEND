import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CreatePersonnel} from '../../apis/personnelApi'
import {RootState} from '../../app/store'
import {PersonnelModel} from '../../models/personnel'

interface PersonnelState {
  loadding: boolean
  listPersonnel: PersonnelModel[]
}
const initialState: PersonnelState = {
  loadding: false,
  listPersonnel: [],
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
    getListPersonnel(state) {
      state.loadding = false
    },
    getListPersonnelSucces(state, action: PayloadAction<PersonnelModel[]>) {
      state.loadding = false
      state.listPersonnel = action.payload
    },
    getListPersonnelFail(state) {
      state.loadding = false
    },
  },
})

export const personnelAction = personnelSlice.actions

export const personnelReducer = personnelSlice.reducer

export const selectListPersonnel = (state: RootState) =>
  state.personnel.listPersonnel
