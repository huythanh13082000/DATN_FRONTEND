import axiosClient from './axiosClient'
import {urlApi} from './url'

export const rankApi = {
  createRank(params: {name: string; value: number; department: string}) {
    return axiosClient.postService(urlApi.rank, params)
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
