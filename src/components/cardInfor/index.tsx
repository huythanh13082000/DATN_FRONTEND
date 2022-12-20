import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import axiosClient from '../../apis/axiosClient'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {authActions, selectUser} from '../../feature/auth/authSlice'
import {PersonnelModel} from '../../models/personnel'
import {UserModel} from '../../models/user.model'
import {FILE, LOCAL_STORAGE} from '../../utils/constants'
import BBtn from '../button'
import ChangePassWord from '../dialogChangePassWord'
import './cardInfor.css'

const CardInfor = (props: {user: UserModel}) => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const personnel = useAppSelector(selectUser)
  const hanleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    dispatch(authActions.setLoginStatus(false))
    dispatch(authActions.setUser(undefined))
    navigate('/login')
  }
  return (
    <div className='ci_div1'>
      <img
        src={'/img/userImage.png'}
        alt=''
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <p className='ci_p1'>{personnel?.role}</p>
      <p className='ci_p2'>{personnel?.name}</p>
      <p className='ci_p3'>{personnel?.rank}</p>
      <p className='ci_p3'>{personnel?.email}</p>
      <p style={{borderTop: '1px solid #E1E1E1'}}></p>
      <div className='ci_div2'>
        <ChangePassWord />
        <BBtn title={t('button.logOut')} onClick={hanleLogout} />
      </div>
    </div>
  )
}

export default CardInfor
