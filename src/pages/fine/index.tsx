import {Col, DatePicker, Input, Row, Tabs} from 'antd'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsMoney, personnelFineColumn} from '../../utils/columnTable'

const FinePage = () => {
  const [filter, setFilter] = useState<any>()
  const [filterPersonnelFine, setFilterPersonnelFine] = useState<any>()
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
            url={urlApi.fine}
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
                  setFilterPersonnelFine({
                    ...filterPersonnelFine,
                    personnelName: e.target.value,
                  })
                }
              />
            </Col>
            <Col span={4}>
              <p>Tìm kiếm theo ngày phạt: </p>
              <DatePicker
                onChange={(e) => {
                  setFilterPersonnelFine({
                    ...filterPersonnelFine,
                    dateFine: e?.format(),
                  })
                }}
                style={{width: '100%'}}
              />
            </Col>
          </Row>
          <TableCustom
            columns={personnelFineColumn}
            url={urlApi.personnelFine}
            filter={filterPersonnelFine}
            disableExportExcel
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default FinePage
