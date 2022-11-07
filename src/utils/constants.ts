import moment from 'moment'

export const Config = {
  HOST_API: 'http://localhost:4200/api/',
}

export enum LOCAL_STORAGE {
  TOKEN = 'access_token',
}
export const FILE = `http://localhost:4200/`

export const PATH_NO_LAYOUT = ['/login']
export const IS_LOGGED: boolean = true

export const momentFomat = (params: string) => {
  if (params) return moment(params).format('DD/MM/YYYY hh:mm')
  else return ''
}
export const formatNumberAsCurrency = (params: number | string) => {
  return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
