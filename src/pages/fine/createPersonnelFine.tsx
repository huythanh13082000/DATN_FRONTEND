import {Button, Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import SelectApi from '../../components/selectApi'
import {fineAction} from '../../feature/fine/fineSlice'

const CreatePersonnelfine = () => {
  const dispatch = useAppDispatch()
  const [personnel, setPersonnel] = useState('')
  const [fine, setfine] = useState('')
  const [datefine, setDateFine] = useState<string>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

  const createFine = () => {
    personnel &&
      fine &&
      dispatch(
        fineAction.createPersonnelFine({
          fine,
          personnel,
          dateFine: datefine ? datefine : moment().format(),
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
          value={moment(datefine)}
          onChange={(e) => setDateFine(e?.format())}
        />
        <Col span={24} style={{marginTop: '1rem'}}>
          <Button type='primary' onClick={createFine}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreatePersonnelfine
