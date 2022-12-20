import {Col, DatePicker, Input, Row} from 'antd'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsPersonnel} from '../../utils/columnTable'

const Personnel = () => {
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
          <p>Tìm kiếm theo email: </p>
          <Input
            placeholder='Nhập email'
            onChange={(e) => setFilter({...filter, email: e.target.value})}
          />
        </Col>
      </Row>
      <TableCustom
        url={urlApi.personnel}
        columns={columnsPersonnel}
        // searchName
        disableExportExcel
        filter={filter}
      />
    </div>
  )
}

export default Personnel
