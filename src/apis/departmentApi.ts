import axiosClient from './axiosClient'
import {urlApi} from './url'

export const departmentApi = {
  updateDepartment(params: {_id: string; name: string}) {
    return axiosClient.updateService(urlApi.department, params)
  },
  createDepartment(params: {name: string}) {
    return axiosClient.postService(urlApi.department, params)
  },
}
