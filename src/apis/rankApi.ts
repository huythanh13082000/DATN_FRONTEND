import axiosClient from './axiosClient'
import {urlApi} from './url'

export const rankApi = {
  createRank(params: {name: string; value: number; department: string}) {
    return axiosClient.postService(urlApi.rank, params)
  },
  getListRank() {
    return axiosClient.getService(urlApi.personnel, {limit: 40, offset: 0})
  },
  updateRank(params: {
    _id: string
    name?: string
    value?: number
    department?: string
  }) {
    return axiosClient.updateService(urlApi.rank, params)
  },
}
