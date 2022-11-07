import {Button, Col, Input, InputNumber, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {urlApi} from '../../apis/url'
import SelectApi from '../../components/selectApi'
import {rankAction} from '../../feature/rank/rankSlice'
import {RankModel} from '../../models/rank'

const RankUpdate = (props: {data: RankModel}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [department, setDepartment] = useState<string>('')
  useEffect(() => {
    setName(props.data.name)
    setDepartment(props.data.department._id)
    setValue(props.data.value)
  }, [props])
  const updateRank = () => {
    dispatch(
      rankAction.updateRank({
        _id: props.data._id,
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
      />
      <p>Lương :</p>
      <InputNumber
        defaultValue={0}
        value={value}
        onChange={(e) => {
          setValue(Number(e))
        }}
        style={{width: '100%'}}
      />
      <p>Phòng ban :</p>
      <SelectApi
        url={urlApi.department}
        field={department}
        setField={(params: string) => setDepartment(params)}
      />
      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={updateRank}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default RankUpdate
