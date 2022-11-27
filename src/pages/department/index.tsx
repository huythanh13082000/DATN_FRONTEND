import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { columnsDepartment } from '../../utils/columnTable'

const Department = () => {
  return (
    <div>
      <TableCustom
        url={urlApi.department}
        columns={columnsDepartment}
        searchName
      />
    </div>
  )
}

export default Department
