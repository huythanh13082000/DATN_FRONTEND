import {DepartmentModel} from './department'

export interface RankModel {
  name: string
  department: DepartmentModel
  value: number
  createdAt: string
  updatedAt: string
}
