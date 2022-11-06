import {Button, Col, Input, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {departmentAction} from '../../feature/department/departmentSlice'
import {DepartmentModel} from '../../models/department'

const CreateDepartment = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const createDepartment = () => {
    dispatch(departmentAction.createDepartment({name: name}))
  }
  return (
    <Row>
      <p>Tên phòng ban :</p>
      <Input
        placeholder='name'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={createDepartment}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default CreateDepartment
