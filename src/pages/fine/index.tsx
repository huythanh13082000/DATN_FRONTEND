import {Tabs} from 'antd'
import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsMoney, personnelFineColumn} from '../../utils/columnTable'

const FinePage = () => {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Danh sách' key='1'>
          <TableCustom
            columns={columnsMoney}
            url={urlApi.fine}
            searchName
            disableExportExcel
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Danh sách nhân viên' key='2'>
          <TableCustom
            columns={personnelFineColumn}
            url={urlApi.personnelFine}
            searchName
            disableExportExcel
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default FinePage
