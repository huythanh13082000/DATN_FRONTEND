import {MoneyModel} from './money'
import {PersonnelModel} from './personnel'

export interface personnelFine {
  _id:string
  personnel: PersonnelModel
  fine: MoneyModel
  dateFine: string
  createdAt: string
  updatedAt: string
}
