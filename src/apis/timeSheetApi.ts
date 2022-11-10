import axiosClient from './axiosClient'
import {urlApi} from './url'

export const timeSheetApi = {
  getListPersonnelTimeSheet() {
    return axiosClient.getService(`${urlApi.timeSheet}/personnels`)
  },
}
