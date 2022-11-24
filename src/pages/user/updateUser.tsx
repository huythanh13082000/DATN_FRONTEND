import {Button, Col, Input, message, Row, Select} from 'antd'
import React, {useState, useEffect} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {authActions} from '../../feature/auth/authSlice'
import {UserModel} from '../../models/user.model'

const UpdateUser = (props: {data: UserModel}) => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>()
  const [role, setRole] = useState<string>()
  useEffect(() => {
    setEmail(props.data.email)
    setRole(props.data.role)
  }, [props])

  const updateUser = () => {
    // if (passWord === checkPassWord)
    email &&
      role &&
      props.data._id &&
      dispatch(authActions.updateUser({email, role, _id: props.data._id}))
    // else {
    console.log(1233)
    //   message.error('Mật khẩu không khớp!')
    // }
  }

  return (
    <Row>
      <p>Email :</p>
      <Input
        placeholder='Nhập email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <p>Quyền :</p>
      <Select
        style={{width: '100%'}}
        onChange={(e) => setRole(e)}
        value={role}
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

      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={updateUser}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default UpdateUser
