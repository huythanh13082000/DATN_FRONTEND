import React from 'react'
import { urlApi } from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsMoney } from '../../utils/columnTable'

const FinePage = () => {
  return (
    <div><TableCustom columns={columnsMoney} url={urlApi.fine}/></div>
  )
}

export default FinePage