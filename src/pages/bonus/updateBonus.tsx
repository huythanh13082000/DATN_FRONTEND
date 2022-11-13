import {Button, Col, Input, Row} from 'antd'
import React, {useState, useEffect} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {bonusAction} from '../../feature/bonus/bonusSlice'
import { MoneyModel } from '../../models/money'

const UpdateBonus = (props: {data: MoneyModel}) => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const updateBonus = () => {
    dispatch(bonusAction.updateBonus({_id: props.data._id, name, value}))
  }
  useEffect(() => {
    setName(props.data.name)
    setValue(props.data.value)
  }, [props.data])

  return (
    <div>
      <Row>
        <p>Tên :</p>
        <Input
          placeholder='tên thưởng'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <p>Số tiền :</p>
        <Input
          placeholder='Nhập số tiền'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
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

export default UpdateBonus
