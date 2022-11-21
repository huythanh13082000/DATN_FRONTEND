import axiosClient from './axiosClient'
import {urlApi} from './url'

export const personnelFineApi = {
  createPersonnelFine(parmas: {
    personnel: string
    fine: string
    dateFine: string
  }) {
    return axiosClient.postService(urlApi.personnelFine, parmas)
  },
  updatePersonnelFine(parmas: {
    personnel: string
    fine: string
    dateFine: string
  }) {
    return axiosClient.updateService(urlApi.personnelFine, parmas)
  },
}
