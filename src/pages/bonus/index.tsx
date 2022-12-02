import {Tabs} from 'antd'
import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import { personnelBonus } from '../../routers/paths/path'
import {columnsMoney, personnelBonusColumn} from '../../utils/columnTable'

const BonusPage = () => {
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Danh sách' key='1'>
          <TableCustom columns={columnsMoney} url={urlApi.bonus} searchName  disableExportExcel/>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Danh sách nhân viên' key='2'>
          <TableCustom columns={personnelBonusColumn} url={urlApi.personnelBonus} searchName  disableExportExcel/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default BonusPage
