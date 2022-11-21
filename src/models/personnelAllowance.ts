import {MoneyModel} from './money'
import {PersonnelModel} from './personnel'

export interface personnelAllowance {
  _id:string
  personnel: PersonnelModel
  allowance: MoneyModel
  dateAllowance: string
  createdAt: string
  updatedAt: string
}
