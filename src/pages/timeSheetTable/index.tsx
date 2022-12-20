import {Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnSummaryOfWorkingDays} from '../../utils/columnTable'

const TimeSheetTablePage = () => {
  const [day, setDay] = useState<string>()
  const [filter, setFilter] = useState<any>()
  return (
    <>
      <div>
        <div>
          <p style={{marginBottom: '0.5rem', marginTop: '2rem'}}>
            Chọn tháng:{' '}
          </p>
          <DatePicker
            onChange={(e) => {
              console.log(e?.format('MM/YYYY'))
              setDay(e?.format())
            }}
            picker='month'
          />
        </div>
        <p
          style={{fontSize: '30px', textAlign: 'center'}}
        >{`Bảng tổng hợp công tháng ${moment(day).format('MM YYYY')}`}</p>
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
          disableEdit
          url={urlApi.summaryOfWorkingDays}
          columns={columnSummaryOfWorkingDays}
          disableAdd
          disableDelete
          paramsHeader={{day}}
          filter={filter}
        />
      </div>
    </>
  )
}

export default TimeSheetTablePage
