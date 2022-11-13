import React from 'react'
import { urlApi } from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsMoney } from '../../utils/columnTable'

const AllowancePage = () => {
  return (
    <div><TableCustom columns={columnsMoney} url={urlApi.allowance}/></div>
  )
}

export default AllowancePage