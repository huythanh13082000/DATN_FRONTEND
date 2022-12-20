import {Col, DatePicker, Input, Row} from 'antd'
import React, {useState, useEffect} from 'react'
import TableCustom from '../../components/tableCustom'
import {Url} from '../../routers/paths'
import {personnelDayOffColumn} from '../../utils/columnTable'

const PersonnelDayOff = () => {
  const [filter, setFilter] = useState<any>()
  return (
    <div>
      <Row gutter={16}>
        <Col span={4}>
          <p>Tìm kiếm theo tên: </p>
          <Input
            placeholder='Nhập tên'
            onChange={(e) => setFilter({...filter, name: e.target.value})}
          />
        </Col>
        <Col span={4}>
          <p>Tìm kiếm theo ngày nghỉ: </p>
          <DatePicker
            onChange={(e) => {
              setFilter({...filter, dayOff: e?.format()})
            }}
            style={{width: '100%'}}
          />
        </Col>
      </Row>
      <TableCustom
        url={Url.personnelDayOff}
        columns={personnelDayOffColumn}
        disableExportExcel
        filter={filter}
      />
    </div>
  )
}

export default PersonnelDayOff
