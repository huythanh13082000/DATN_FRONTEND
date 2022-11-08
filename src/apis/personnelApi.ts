import axiosClient from './axiosClient'
import {urlApi} from './url'

export interface CreatePersonnel {
  name: string
  address?: string
  rank?: string
  email: string
  phoneNumber?: string
  IDCard?: string
  createdAt?: string
  updatedAt?: string
  dateOfBirth?: string
  sex?: string
  avatar?: File
  note?: string
  status?: Boolean
}

export const personnelApi = {
  createPersonnel(params: any) {
    return axiosClient.postService(urlApi.personnel, params, true)
  },
}
