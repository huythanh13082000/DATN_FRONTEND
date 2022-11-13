import axiosClient from './axiosClient'
import {urlApi} from './url'

export const allowanceApi = {
  createAllowance(params: {name: string; value: string}) {
    return axiosClient.postService(urlApi.allowance, params)
  },
  updateAllowance(params: {_id: string; name: string; value: string}) {
    return axiosClient.updateService(urlApi.allowance, params)
  },
}
