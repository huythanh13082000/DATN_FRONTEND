import {Col, Input, Row} from 'antd'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import SelectApi from '../../components/selectApi'
import TableCustom from '../../components/tableCustom'
import {columnsRank} from '../../utils/columnTable'

const Rank = () => {
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
      </Row>
      <TableCustom
        url={urlApi.rank}
        columns={columnsRank}
        filter={filter}
        disableExportExcel
      />
    </div>
  )
}

export default Rank
