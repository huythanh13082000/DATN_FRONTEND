import {DepartmentModel} from './department'

export interface RankModel {
  _id: string
  name: string
  department: DepartmentModel
  value: number
  createdAt?: string
  updatedAt?: string
}
