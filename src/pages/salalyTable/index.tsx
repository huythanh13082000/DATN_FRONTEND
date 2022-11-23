import {Button, DatePicker, Input} from 'antd'
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
        <TableCustom
          url={urlApi.summaryOfSalary}
          columns={summaryOfSalaryColumn}
          disableAdd
          disableDelete
          disableEdit
          paramsHeader={{sumWorkingDay, day}}
        />
      )}
    </div>
  )
}

export default SalalyTablePage
