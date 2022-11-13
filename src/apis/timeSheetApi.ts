import axiosClient from './axiosClient'
import {urlApi} from './url'

export const timeSheetApi = {
  getListPersonnelTimeSheet() {
    return axiosClient.getService(`${urlApi.timeSheet}/personnels`)
  },
  createTimeSheets(params: {workingday: string}) {
    return axiosClient.postService(`${urlApi.timeSheet}/many`, params)
  },
  updateTimeSheet(params: {_id: string; status: number}) {
    return axiosClient.updateService(`${urlApi.timeSheet}`, params)
  },
}
