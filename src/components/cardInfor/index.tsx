import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import axiosClient from '../../apis/axiosClient'
import {useAppDispatch} from '../../app/hooks'
import {authActions} from '../../feature/auth/authSlice'
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
  const hanleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN)
    dispatch(authActions.setLoginStatus(false))
    navigate('/login')
  }
  // useEffect(() => {
  //   const getPersonnel = async () => {
  //     const data: {data: PersonnelModel} = await axiosClient.getService(
  //       `/personnelsEmail/${props.user.email}`
  //     )
  //     setPersonnel(data.data)
  //     console.log(333, data)
  //   }
  //   getPersonnel()
  // }, [props.user.email])
  return (
    <div className='ci_div1'>
      <img
        src={`${FILE}/${props.user?.avatar}`}
        alt=''
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      {/* <p className='ci_p1'>{props.user}</p> */}
      <p className='ci_p2'>{props.user?.name}</p>
      <p className='ci_p3'>{props.user?.rank}</p>
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
