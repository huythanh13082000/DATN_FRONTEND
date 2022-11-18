import axiosClient from './axiosClient'
import {urlApi} from './url'

export const authApi = {
  login(params: {email: string; passWord: string}) {
    return axiosClient.postService(urlApi.login, params)
  },
  getProfile() {
    return axiosClient.getService(`${urlApi.getProfile}/detail`)
  },
  changePassWord(params: {newPassWord: string; oldPassWord: string}) {
    return axiosClient.updateService(urlApi.changePassWord, params)
  },
}
