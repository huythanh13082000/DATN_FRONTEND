import {MoneyModel} from './money'
import {PersonnelModel} from './personnel'

export interface personnelBonus {
  _id:string
  personnel: PersonnelModel
  bonus: MoneyModel
  dateBonus: string
  createdAt: string
  updatedAt: string
}
