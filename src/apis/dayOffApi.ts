import axiosClient from './axiosClient'
import {urlApi} from './url'

export const dayOffApi = {
  createDayOff(params: {personnel: string; dayOff: string; status: number}) {
    return axiosClient.postService(urlApi.personnelDayOff, params)
  },
  updateDayOff(params: {_id:string,personnel: string; dayOff: string; status: number}) {
    return axiosClient.updateService(urlApi.personnelDayOff, params)
  },
}
