import React from 'react'
import {Col, Row, Input, Button} from 'antd'
import './login.css'
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'

const Login = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <p className='login-p1'>{t('Login.login')}</p>
          {/* <p className='login-p2'>{t('Login.sign')}</p> */}
          <Row className='login-row'>
            <Col span={22}>
              <Input
                className='login-input'
                bordered={false}
                placeholder={t('Login.email')}
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
                placeholder={t('Login.password')}
                type='password'
              />
            </Col>
            <Col span={2}>
              <img src='/img/login-pw.svg' alt='' />
            </Col>
          </Row>

          <Button className='login-buuton'>{t('Login.login')}</Button>
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
