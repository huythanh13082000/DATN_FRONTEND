import {Button, Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import SelectApi from '../../components/selectApi'
import {bonusAction} from '../../feature/bonus/bonusSlice'

const CreatePersonnelBonus = () => {
  const dispatch = useAppDispatch()
  const [personnel, setPersonnel] = useState('')
  const [bonus, setBonus] = useState('')
  const [dateBonus, setDateBonus] = useState<string>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

  const createBonus = () => {
    personnel &&
      bonus &&
      dispatch(
        bonusAction.createPersonnelBonus({
          bonus,
          personnel,
          dateBonus: dateBonus ? dateBonus : moment().format(),
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
        <p>Chọn thưởng:</p>
        <SelectApi
          url={urlApi.bonus}
          field={bonus}
          setField={(params: string) => setBonus(params)}
        />
        <p>Ngày thưởng:</p>
        <DatePicker
          format={dateFormatList}
          style={{width: '100%'}}
          value={moment(dateBonus)}
          onChange={(e) => setDateBonus(e?.format())}
        />
        <Col span={24} style={{marginTop: '1rem'}}>
          <Button type='primary' onClick={createBonus}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreatePersonnelBonus
