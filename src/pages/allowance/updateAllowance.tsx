import {Button, Col, Input, Row} from 'antd'
import React, {useState, useEffect} from 'react'
import {useAppDispatch} from '../../app/hooks'
import { allowanceAction } from '../../feature/allowance/allowanceSlice'
import { MoneyModel } from '../../models/money'

const UpdateAllowance = (props: {data: MoneyModel}) => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const updateAllowance = () => {
    dispatch(allowanceAction.updateAllowance({_id: props.data._id, name, value}))
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
          placeholder='tên trợ cấp'
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
          <Button type='primary' onClick={updateAllowance}>
            Lưu
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default UpdateAllowance
