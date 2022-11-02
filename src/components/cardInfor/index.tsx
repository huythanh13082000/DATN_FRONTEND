import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../../app/hooks'
import {authActions} from '../../feature/auth/authSlice'
import {UserModel} from '../../models/user.model'
import {FILE, LOCAL_STORAGE} from '../../utils/constants'
import BBtn from '../button'
import ChangePassWord from '../dialogChangePassWord'
import './cardInfor.css'

const CardInfor = (props: {user: UserModel}) => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const hanleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    dispatch(authActions.setLoginStatus(false))
    navigate('/login')
  }
  return (
    <div className='ci_div1'>
      <img
        src={`${FILE}${props.user?.avatar}`}
        alt='avatar'
        className='ci_img1'
      />
      <p className='ci_p1'>{props.user?.username}</p>
      {/* <p className='ci_p2'>Admin</p> */}
      <p className='ci_p3'>{props.user?.email}</p>
      <p style={{borderTop: '1px solid #E1E1E1'}}></p>
      <div className='ci_div2'>
        <ChangePassWord />
        <BBtn title={t('button.logOut')} onClick={hanleLogout} />
      </div>
    </div>
  )
}

export default CardInfor
