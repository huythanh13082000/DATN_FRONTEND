import {PayloadAction} from '@reduxjs/toolkit'
import axiosClient from './axiosClient'
import {urlApi} from './url'

export const authApi = {
  login(params: {email: string; passWord: string}) {
    return axiosClient.postService(urlApi.login, params)
  },
  getProfile() {
    return axiosClient.getService(`${urlApi.user}/detail`)
  },
  changePassWord(params: {newPassWord: string; oldPassWord: string}) {
    return axiosClient.updateService(urlApi.changePassWord, params)
  },
  createUser(params: {email: string; passWord: string; role: string}) {
    return axiosClient.postService(urlApi.user, params)
  },
  updateUser(params: {email: string; role: string; _id: string}) {
    return axiosClient.updateService(urlApi.user, params)
  },
}
