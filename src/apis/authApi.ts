import axiosClient from './axiosClient'
import {urlApi} from './url'

export const authApi = {
  login(params: {username: string; passWord: string}) {
    return axiosClient.postService(urlApi.login, params)
  },
}
