import {MoneyModel} from './money'
import {PersonnelModel} from './personnel'

export interface personnelDayOffModel {
  _id: string
  personnel: PersonnelModel
  dayOff: string
  status: number
}
