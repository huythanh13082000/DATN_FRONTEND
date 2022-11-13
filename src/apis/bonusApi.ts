import axiosClient from './axiosClient'
import {urlApi} from './url'

export const bonusApi = {
  createBonus(params: {name: string; value: string}) {
    return axiosClient.postService(urlApi.bonus, params)
  },
  updateBonus(params: {_id: string; name: string; value: string}) {
    return axiosClient.updateService(urlApi.bonus, params)
  },
}
