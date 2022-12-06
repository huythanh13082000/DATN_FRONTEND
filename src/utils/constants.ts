import moment from 'moment'

export const Config = {
  HOST_API: 'http://localhost:8080/api/',
  // HOST_API: 'https://datn-pht1308.herokuapp.com/api/',
}

export enum LOCAL_STORAGE {
  TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  EXP = 'exp'
}

// export const FILE = `https://datn-pht1308.herokuapp.com/`
export const FILE = `http://localhost:8080/`

export const PATH_NO_LAYOUT = ['/login']
export const IS_LOGGED: boolean = true

export const momentFomat = (params: string) => {
  if (params) return moment(params).format('DD/MM/YYYY hh:mm')
  else return ''
}
export const formatNumberAsCurrency = (params: number | string) => {
  return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
