import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface departmentState {
  loading: boolean
}
const initialState: departmentState = {
  loading: false,
}

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    updateDepartment(state, action: PayloadAction<{_id: string; name: string}>) {
      state.loading = true
    },
    updateDepartmentSuccess(state) {
      state.loading = false
    },
    updateDepartmentFail(state) {
      state.loading = false
    },
  },
})

export const departmentAction = departmentSlice.actions

export const departmentReducer = departmentSlice.reducer
