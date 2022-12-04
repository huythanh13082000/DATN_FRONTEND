import axios from 'axios'
import {urlApi} from '../apis/url'
import {Config} from '../utils/constants'
axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401) {
      const res = await axios.post(`${Config.HOST_API}${urlApi.refreshtoken}`)
      console.log('resf', res.data)
      return axios(err.config)
    } else return err
  }
)
