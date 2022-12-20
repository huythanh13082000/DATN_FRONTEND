import React, {useState, useEffect} from 'react'
import {Col, Row, Input, Button} from 'antd'
import './login.css'
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {authActions, selectLoginStatus} from '../../feature/auth/authSlice'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginStatus = useAppSelector(selectLoginStatus)
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')
  const handleLogin = () => {
    dispatch(authActions.login({email, passWord}))
  }
  useEffect(() => {
    if (loginStatus) {
      navigate('/home')
    }
  }, [loginStatus, navigate])
  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <p className='login-p1'>{t('Login.login')}</p>
          <Row className='login-row'>
            <Col span={22}>
              <Input
                className='login-input'
                bordered={false}
                placeholder={t('Login.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Col>
            <Col span={2}>
              <img src='/img/login-pw.svg' alt='' />
            </Col>
          </Row>

          <Button className='login-buuton' onClick={() => handleLogin()}>
            {t('Login.login')}
          </Button>
        </div>
      </div>
    </>
  )
}

export default Login
