import {Button, Col, DatePicker, Input, Radio, Row} from 'antd'
import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import SelectApi from '../../components/selectApi'
import {dayOffAction} from '../../feature/dayOff/dayOffSlice'
import {personnelDayOffModel} from '../../models/personnelDayOff'

const UpdatePersonnelDayOff = (props: {data: personnelDayOffModel}) => {
  const dispatch = useAppDispatch()
  const [personnel, setPersonnel] = useState('')
  const [dayOff, setdayOff] = useState<string>()
  const [status, setStatus] = useState<number>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

  const updatedayOff = () => {
    personnel &&
      dayOff &&
      status &&
      dispatch(
        dayOffAction.updatePersonnelDayOff({
          _id: props.data._id,
          dayOff,
          personnel,
          status,
        })
      )
  }
  useEffect(() => {
    setdayOff(props.data.dayOff)
    setStatus(props.data.status)
    setPersonnel(props.data.personnel._id)
  }, [props.data])

  return (
    <div>
      {' '}
      <Row>
        <p>Chọn nhân viên:</p>
        <SelectApi
          url={urlApi.personnel}
          field={personnel}
          setField={(params: string) => setPersonnel(params)}
        />
        <p>Ngày nghỉ phép:</p>
        <DatePicker
          format={dateFormatList}
          style={{width: '100%'}}
          value={moment(dayOff)}
          onChange={(e) => setdayOff(e?.format())}
        />
        <Radio.Group onChange={(e) => setStatus(e.target.value)} value={status}>
          <Radio value={0.5}>Sáng</Radio>
          <Radio value={-0.5}>Chiều</Radio>
          <Radio value={1}>Cả ngày</Radio>
        </Radio.Group>
        <Col span={24} style={{marginTop: '1rem'}}>
          <Button type='primary' onClick={updatedayOff}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default UpdatePersonnelDayOff
