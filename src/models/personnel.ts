import {RankModel} from './rank'

export interface PersonnelModel {
  name: String
  address: String
  rank: RankModel
  email: String
  phoneNumber: String
  IDCard: String
  createdAt: string
  updatedAt: string
  dateOfBirth: string
  sex: 'male' | 'female'
  avatar: String
  note: String
  status: Boolean
}
