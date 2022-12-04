import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Config, LOCAL_STORAGE} from '../utils/constants'
import {urlApi} from './url'

const req = axios.create({
  baseURL: Config.HOST_API,
})

req.interceptors.request.use(
  (config) => {
    console.log('tr')
    return config
  },
  (err) => {
    console.log(err)
  }
)
req.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    console.log('sau')
    const res = await axios.post(`${Config.HOST_API}${urlApi.refreshtoken}`, {
      refreshToken: localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN),
    })
    localStorage.setItem(LOCAL_STORAGE.REFRESH_TOKEN,res.data.refreshToken)
    localStorage.setItem(LOCAL_STORAGE.TOKEN,res.data.accessToken)
    // console.log('1323212322', res.data.accessToken)
  }
)

const postService = async (
  url: string,
  body?: object,
  isFormData = false,
  isAuthorization = true
) => {
  const headers: any = isFormData
    ? {
        'Content-Type': 'multipart/form-data',
      }
    : {Accept: 'application/json', 'Content-Type': 'application/json'}
  console.log(6666, headers)
  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
  if (!!token && token !== '') {
    headers.Authorization =
      'Bearer ' + localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  const requestOptions: any = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
  }
  let response: any = undefined
  if (!isFormData)
    response = req.post(url, JSON.stringify(body), requestOptions)
  else response = req.post(url, body, requestOptions)
  try {
    await response
  } catch (error: any) {
    // if ([401].includes(error.response.status)) {
    //   localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    //   // configureStore.store.dispatch(signOut());
    // }
  }

  return (await response).data
}
const updateService = async (
  url: string,
  body?: object,
  isFormData = false,
  isAuthorization = true
) => {
  const headers: any = isFormData
    ? {'Content-Type': 'multipart/form-data'}
    : {Accept: 'application/json', 'Content-Type': 'application/json'}
  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
  if (!!token && token !== '') {
    headers.Authorization =
      'Bearer ' + localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  const requestOptions: any = {
    method: 'PUT',
    headers: headers,
    credentials: 'include',
  }

  let response: any = undefined
  if (!isFormData) response = req.put(url, JSON.stringify(body), requestOptions)
  else response = req.put(url, body, requestOptions)
  try {
    await response
  } catch (error: any) {
    // console.log('error', error.response)
    // if ([401].includes(error.response.status)) {
    //   localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    //   // configureStore.store.dispatch(signOut());
    // }
  }

  return (await response).data
}

const getService = async (
  url: string,
  params?: any,
  body?: object | null,
  isAuthorization = true
) => {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
  if (!!token && token !== '') {
    headers.Authorization =
      'Bearer ' + localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  const requestOptions: any = {
    method: 'GET',
    headers: headers,
    params: params,
  }

  const response = req.get(url, requestOptions)
  try {
    await response
  } catch (error: any) {
    // console.log('error', error.response)
    // if ([401].includes(error.response.status)) {
    //   localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    //   // configureStore.store.dispatch(signOut());
    // }
  }

  return (await response).data
}

const deleteService = async (
  url: string,
  body?: object,
  isAuthorization = true
) => {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
  if (!!token && token !== '') {
    headers.Authorization =
      'Bearer ' + localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  const requestOptions: any = {
    method: 'DELETE',
    headers: headers,
    data: body,
  }

  const response = req.delete(url, requestOptions)
  try {
    await response
  } catch (error: any) {
    // console.log('error', error.response)
    // if ([401].includes(error.response.status)) {
    //   localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    //   // configureStore.store.dispatch(signOut());
    // }
  }

  return (await response).data
}

const uploadService = async (
  url: string,
  formData: any,
  isAuthorization = true
) => {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  }

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
  if (!!token && token !== '') {
    headers.Authorization =
      'Bearer ' + localStorage.getItem(LOCAL_STORAGE.TOKEN)
  }

  const requestOptions: any = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
  }

  const response = req.post(url, formData, requestOptions)
  return (await response).data
}

export default {
  postService,
  getService,
  updateService,
  uploadService,
  deleteService,
}
