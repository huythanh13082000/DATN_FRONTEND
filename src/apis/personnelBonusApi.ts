import axiosClient from './axiosClient'
import {urlApi} from './url'

export const personnelBonusApi = {
  createPersonnelBonus(parmas: {
    personnel: string
    bonus: string
    dateBonus: string
  }) {
    return axiosClient.postService(urlApi.personnelBonus, parmas)
  },
  updatePersonnelBonus(parmas: {
    _id: string
    personnel: string
    bonus: string
    dateBonus: string
  }) {
    return axiosClient.updateService(urlApi.personnelBonus, parmas)
  },
}
