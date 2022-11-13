import {Button, Col, Input, Row} from 'antd'
import React, {useState} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {bonusAction} from '../../feature/bonus/bonusSlice'

const CreateBonus = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const createBonus = () => {
    dispatch(bonusAction.createBonus({name, value}))
  }
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
          <Button type='primary' onClick={createBonus}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreateBonus
