import {Button, Col, Input, InputNumber, Row} from 'antd'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {urlApi} from '../../apis/url'
import SelectApi from '../../components/selectApi'
import {rankAction} from '../../feature/rank/rankSlice'

const RankCreate = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [department, setDepartment] = useState<string>('')
  const createRank = () => {
    dispatch(
      rankAction.createRank({
        name,
        value,
        department,
      })
    )
  }
  return (
    <Row>
      <p>Tên Chức vụ :</p>
      <Input
        placeholder='name'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        status={!name ? 'error' : ''}
      />
      <p>Lương :</p>
      <InputNumber
        value={value}
        onChange={(e) => {
          setValue(Number(e))
        }}
        style={{width: '100%'}}
        type={'number'}
        status={!value ? 'error' : ''}
      />
      <p>Phòng ban :</p>
      <SelectApi
      
        url={urlApi.department}
        field={department}
        setField={(params: string) => setDepartment(params)}
      />
      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={createRank}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default RankCreate
