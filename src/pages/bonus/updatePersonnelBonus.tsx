import {Button, Col, DatePicker, Input, Row} from 'antd'
import moment from 'moment'
import React, {useState, useEffect} from 'react'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import SelectApi from '../../components/selectApi'
import {bonusAction} from '../../feature/bonus/bonusSlice'
import {personnelBonus} from '../../models/personnelBonus'

const UpdatePersonnelBonus = (props: {data: personnelBonus}) => {
  const dispatch = useAppDispatch()
  const [personnel, setPersonnel] = useState('')
  const [bonus, setBonus] = useState('')
  const [dateBonus, setDateBonus] = useState<string>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

  useEffect(() => {
    setPersonnel(props.data.personnel._id)
    setBonus(props.data.bonus._id)
    setDateBonus(props.data.dateBonus)
  }, [props.data])

  const updateBonus = () => {
    personnel &&
      bonus &&
      dispatch(
        bonusAction.updatePersonnelBonus({
          _id: props.data._id,
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
          <Button type='primary' onClick={updateBonus}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default UpdatePersonnelBonus
