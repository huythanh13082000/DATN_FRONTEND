import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'

const Department = () => {
  return (
    <div>
      <TableCustom
        url={urlApi.department}
        urlColumn={`${urlApi.department}/columns`}
      />
    </div>
  )
}

export default Department
