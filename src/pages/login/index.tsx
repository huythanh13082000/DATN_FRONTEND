import React from 'react'
import {Col, Row, Input, Button} from 'antd'
import './login.css'

const Login = () => {
  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <p className='login-p1'>Login</p>
          <p className='login-p2'>Sign in to start your session</p>
          <Row className='login-row'>
            <Col span={22}>
              <Input
                className='login-input'
                bordered={false}
                placeholder='Email'
              />
            </Col>
            <Col span={2}>
              <img src='/img/login-email.svg' alt='' />
            </Col>
          </Row>
          <Row className='login-row'>
            <Col span={22}>
              <Input
                className='login-input'
                bordered={false}
                placeholder='Password'
              />
            </Col>
            <Col span={2}>
              <img src='/img/login-pw.svg' alt='' />
            </Col>
          </Row>

          <Button className='login-buuton'>Login</Button>
        </div>
      </div>

      {/* <Button type='primary'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <br />
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
      <Button></Button> */}
    </>
  )
}

export default Login
