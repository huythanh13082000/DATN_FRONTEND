import {RankModel} from './rank'

export interface PersonnelModel {
  _id: string
  name: string
  address: string
  rank: RankModel
  email: string
  phoneNumber: string
  IDCard: string
  createdAt: string
  updatedAt: string
  dateOfBirth: string
  sex: string
  avatar: string
  note: string
  status: boolean
}
