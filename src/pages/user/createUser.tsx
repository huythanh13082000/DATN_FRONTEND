import {Button, Col, Input, message, Row, Select} from 'antd'
import React, {useState} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {authActions} from '../../feature/auth/authSlice'

const CreateUser = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>()
  const [passWord, setPassWord] = useState<string>()
  const [checkPassWord, setCheckPassWord] = useState<string>()
  const [role, setRole] = useState<string>()
  const createUser = () => {
    if (passWord === checkPassWord)
      email &&
        passWord &&
        role &&
        dispatch(authActions.createUser({email, passWord, role}))
    else {
      message.error('Mật khẩu không khớp!')
    }
  }

  return (
    <Row>
      <p>Quyền :</p>
      <Select
        style={{width: '100%'}}
        onChange={(e) => setRole(e)}
        options={[
          {
            value: 'admin',
            label: 'Admin',
          },
          {
            value: 'manage',
            label: 'Quản lý',
          },
          {
            value: 'member',
            label: 'Nhân viên',
          },
        ]}
      />
      <br />
      <p>Email :</p>
      <Input
        placeholder='Nhập email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <p>Mật khẩu :</p>
      <Input
        value={passWord}
        onChange={(e) => {
          setPassWord(e.target.value)
        }}
        placeholder='Nhập mật khẩu'
        style={{width: '100%'}}
        type={'passWord'}
      />
      <p>Xác nhận mật khẩu :</p>
      <Input
        value={checkPassWord}
        onChange={(e) => {
          setCheckPassWord(e.target.value)
        }}
        placeholder='Xác nhận mật khẩu'
        style={{width: '100%'}}
        type={'passWord'}
      />

      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={createUser}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default CreateUser
