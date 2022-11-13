import React from 'react'
import { urlApi } from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsMoney } from '../../utils/columnTable'

const BonusPage = () => {
  return (
    <div><TableCustom columns={columnsMoney} url={urlApi.bonus}/></div>
  )
}

export default BonusPage