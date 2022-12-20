import {Button, Col, DatePicker, Input, message, Row} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import axiosClient from '../../apis/axiosClient'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import TableCustom from '../../components/tableCustom'
import {columnsTableTimeSheet} from '../../utils/columnTable'

const HistoryTimeSheets = () => {
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
        <Col span={4}>
          <p>Tìm kiếm theo ngày chấm công: </p>
          <DatePicker
            onChange={(e) => {
              setFilter({
                ...filter,
                createdAt: e?.format(),
              })
            }}
            style={{width: '100%'}}
          />
        </Col>
      </Row>
      <TableCustom
        url={urlApi.timeSheet}
        columns={columnsTableTimeSheet}
        disableAdd
        disableEdit
        disableExportExcel
        filter={filter}
      />
    </div>
  )
}

export default HistoryTimeSheets
