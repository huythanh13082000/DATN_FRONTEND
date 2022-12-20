import {Col, Input, Row} from 'antd'
import React, {useState, useEffect} from 'react'
import TableCustom from '../../components/tableCustom'
import {Url} from '../../routers/paths'
import {personnelDayOffColumn} from '../../utils/columnTable'

const PersonnelDayOff = () => {
  const [filter, setFilter] = useState<any>()
  console.log(filter)

  return (
    <div>
      <Row>
        <Col span={4}>
          <Input
            placeholder='name'
            onChange={(e) => setFilter({...filter, name: e.target.value})}
          />
        </Col>
      </Row>
      <TableCustom
        url={Url.personnelDayOff}
        columns={personnelDayOffColumn}
        disableExportExcel
        paramsHeader={filter}
      />
    </div>
  )
}

export default PersonnelDayOff
