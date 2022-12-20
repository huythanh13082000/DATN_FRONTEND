import {Button, Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import TableCustom from '../../components/tableCustom'
import {summaryOfSalaryColumn} from '../../utils/columnTable'

const SalalyTablePage = () => {
  const dispatch = useAppDispatch()
  const [day, setDay] = useState<string>()
  const [sumWorkingDay, setSumWorkingDay] = useState('')
  const [calculate, setCalculate] = useState(false)
  const [filter, setFilter] = useState<any>()
  return (
    <div>
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '1rem'}}>
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
        <div>
          <p style={{marginBottom: '0.5rem', marginTop: '2rem'}}>
            Chọn số ngày công chuẩn:{' '}
          </p>
          <Input
            type='number'
            style={{width: '200px'}}
            value={sumWorkingDay}
            onChange={(e) => {
              setSumWorkingDay(e.target.value)
            }}
          />
        </div>
      </div>
      <Button
        type='primary'
        style={{marginTop: '1rem'}}
        onClick={() => {
          setCalculate(true)
        }}
      >
        Tính Lương
      </Button>

      <p
        style={{fontSize: '30px', textAlign: 'center'}}
      >{`Bảng lương tháng ${moment(day).format('MM YYYY')}`}</p>
      {calculate && (
        <>
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
            url={urlApi.summaryOfSalary}
            columns={summaryOfSalaryColumn}
            disableAdd
            disableDelete
            disableEdit
            sendMail
            paramsHeader={{sumWorkingDay, day}}
            filter={filter}
          />
        </>
      )}
      {/* <Button
        type='primary'
        style={{marginTop: '1rem'}}
        onClick={() => {
          setCalculate(true)
        }}
      >
        Lưu bảng lương
      </Button> */}
    </div>
  )
}

export default SalalyTablePage
