import {PersonnelModel} from './personnel'

export interface TimeSheetModel {
  _id: string
  personnel: PersonnelModel
  workingDay: string
  status: number
  createdAt: string
  updatedAt: string
}
