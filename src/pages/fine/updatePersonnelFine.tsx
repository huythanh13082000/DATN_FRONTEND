import {Button, Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState, useEffect} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import SelectApi from '../../components/selectApi'
import {fineAction} from '../../feature/fine/fineSlice'
import {personnelFine} from '../../models/personnelFine'

const UpdatePersonnelfine = (props: {data: personnelFine}) => {
  const dispatch = useAppDispatch()
  const [personnel, setPersonnel] = useState('')
  const [fine, setfine] = useState('')
  const [dateFine, setDateFine] = useState<string>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

  useEffect(() => {
    setPersonnel(props.data.personnel._id)
    setfine(props.data.fine._id)
    setDateFine(props.data.dateFine)
  }, [props.data])

  const updateFine = () => {
    personnel &&
      fine &&
      dispatch(
        fineAction.updatePersonnelFine({
          _id: props.data._id,
          fine,
          personnel,
          dateFine: dateFine ? dateFine : moment().format(),
        })
      )
  }

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
        <p>Chọn phạt:</p>
        <SelectApi
          url={urlApi.fine}
          field={fine}
          setField={(params: string) => setfine(params)}
        />
        <p>Ngày phạt:</p>
        <DatePicker
          format={dateFormatList}
          style={{width: '100%'}}
          value={moment(dateFine)}
          onChange={(e) => setDateFine(e?.format())}
        />
        <Col span={24} style={{marginTop: '1rem'}}>
          <Button type='primary' onClick={updateFine}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default UpdatePersonnelfine
