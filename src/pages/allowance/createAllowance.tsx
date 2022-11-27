import {Button, Col, Input, Row} from 'antd'
import React, {useState} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {allowanceAction} from '../../feature/allowance/allowanceSlice'

const CreateAllowance = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const createAllowance = () => {
    dispatch(allowanceAction.createAllowance({name, value}))
  }
  return (
    <div>
      <Row>
        <p>Tên :</p>
        <Input
          placeholder='Tên trợ cấp'
          value={name}
          status={!name ? 'error' : ''}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <p>Số tiền :</p>
        <Input
          placeholder='Nhập số tiền'
          value={value}
          status={!value ? 'error' : ''}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <Col span={24} style={{marginTop: '1rem'}}>
          <Button type='primary' onClick={createAllowance}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default CreateAllowance
