import {Button, Col, Input, Row} from 'antd'
import React, {useState} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {fineAction} from '../../feature/fine/fineSlice'
// import {FineAction} from '../../feature/Fine/FineSlice'

const CreateFine = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const createFine = () => {
    dispatch(fineAction.createFine({name, value}))
  }
  return (
    <div>
      <Row>
        <p>Tên :</p>
        <Input
          placeholder='Tên phạt'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          status={!name ? 'error' : ''}
        />
        <p>Số tiền :</p>
        <Input
          placeholder='Nhập số tiền'
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          status={!value ? 'error' : ''}
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

export default CreateFine
