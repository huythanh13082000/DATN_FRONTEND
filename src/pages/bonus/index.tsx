import {Col, DatePicker, Input, Row, Tabs} from 'antd'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {personnelBonus} from '../../routers/paths/path'
import {columnsMoney, personnelBonusColumn} from '../../utils/columnTable'

const BonusPage = () => {
  const [filter, setFilter] = useState<any>()
  const [filterPersonnelBonus, setFilterPersonnelBonus] = useState<any>()
  return (
    <div>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Danh sách' key='1'>
          <Row gutter={16}>
            <Col span={4}>
              <p>Tìm kiếm theo tên: </p>
              <Input
                placeholder='Nhập tên:'
                onChange={(e) => setFilter({...filter, name: e.target.value})}
              />
            </Col>
          </Row>
          <TableCustom
            columns={columnsMoney}
            url={urlApi.bonus}
            filter={filter}
            disableExportExcel
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Danh sách nhân viên' key='2'>
          <Row gutter={16}>
            <Col span={4}>
              <p>Tìm kiếm theo tên nhân viên: </p>
              <Input
                placeholder='Nhập tên:'
                onChange={(e) =>
                  setFilterPersonnelBonus({
                    ...filterPersonnelBonus,
                    personnelName: e.target.value,
                  })
                }
              />
            </Col>
            <Col span={4}>
              <p>Tìm kiếm theo ngày thưởng: </p>
              <DatePicker
                onChange={(e) => {
                  setFilterPersonnelBonus({
                    ...filterPersonnelBonus,
                    dateBonus: e?.format(),
                  })
                }}
                style={{width: '100%'}}
              />
            </Col>
          </Row>
          <TableCustom
            columns={personnelBonusColumn}
            url={urlApi.personnelBonus}
            disableExportExcel
            filter={filterPersonnelBonus}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default BonusPage
