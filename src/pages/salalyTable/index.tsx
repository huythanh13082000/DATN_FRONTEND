import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {summaryOfSalaryColumn} from '../../utils/columnTable'

const SalalyTablePage = () => {
  return (
    <div>
      <TableCustom
        url={urlApi.summaryOfSalary}
        columns={summaryOfSalaryColumn}
        disableAdd
        disableDelete
        disableEdit
        paramsHeader={{sumWorkingDay: 24}}
      />
    </div>
  )
}

export default SalalyTablePage
