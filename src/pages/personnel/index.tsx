import React from 'react'
import { urlApi } from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsPersonnel } from '../../utils/columnTable'

const Personnel = () => {
  return (
    <div>
      <TableCustom url={urlApi.personnel} columns={columnsPersonnel} searchName disableExportExcel/>
    </div>
  )
}

export default Personnel
