import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Config, LOCAL_STORAGE} from '../utils/constants'

const req = axios.create({
  baseURL: Config.HOST_API,
})


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
    if ([401, 404].includes(error.response.status)) {
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      // configureStore.store.dispatch(signOut());
    }
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
    if ([401, 404].includes(error.response.status)) {
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      // configureStore.store.dispatch(signOut());
    }
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
    if ([401, 404].includes(error.response.status)) {
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      // configureStore.store.dispatch(signOut());
    }
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
    if ([401, 404].includes(error.response.status)) {
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      
      // configureStore.store.dispatch(signOut());
    }
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
