import axiosClient from './axiosClient'
import {urlApi} from './url'

export const personnelAllowance = {
  createPersonnelAllowance(parmas: {
    personnel: string
    allowance: string
    dateAllowance: string
  }) {
    return axiosClient.postService(urlApi.personnelAllowance, parmas)
  },
  updatePersonnelAllowance(parmas: {
    personnel: string
    allowance: string
    dateAllowance: string
  }) {
    return axiosClient.updateService(urlApi.personnelAllowance, parmas)
  },
}
