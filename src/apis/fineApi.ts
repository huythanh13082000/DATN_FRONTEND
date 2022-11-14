import axiosClient from './axiosClient'
import {urlApi} from './url'

export const fineApi = {
  createFine(params: {name: string; value: string}) {
    return axiosClient.postService(urlApi.fine, params)
  },
  updateFine(params: {_id: string; name: string; value: string}) {
    return axiosClient.updateService(urlApi.fine, params)
  },
}
