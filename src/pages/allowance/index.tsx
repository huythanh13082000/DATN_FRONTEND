import {Col, Input, Row} from 'antd'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsMoney} from '../../utils/columnTable'

const AllowancePage = () => {
  const [filter, setFilter] = useState<any>()
  return (
    <div>
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
        url={urlApi.allowance}
        filter={filter}
        disableExportExcel
      />
    </div>
  )
}

export default AllowancePage
