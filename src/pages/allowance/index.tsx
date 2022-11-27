import React from 'react'
import { urlApi } from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsMoney } from '../../utils/columnTable'

const AllowancePage = () => {
  return (
    <div><TableCustom columns={columnsMoney} url={urlApi.allowance} searchName/></div>
  )
}

export default AllowancePage