import {Popover} from 'antd'
import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import Images from '../../assets/gen'
import {authActions, selectUser} from '../../feature/auth/authSlice'
import CardGift from '../cardGift'
import CardHelp from '../cardHelp'
import CardInfor from '../cardInfor'
import './header.css'

const buttonWidth = 70

const HeaderComponent = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  console.log(6666, user)
  useEffect(()=>{
    dispatch(authActions.getProfile())
  },[dispatch])
  return (
    <div className='header-container'>
      <Popover placement='top' content={<CardHelp />} trigger='click'>
        <img className='header-img' src={Images.headerIcon} alt='' />
      </Popover>
      <Popover placement='top' content={<CardGift />} trigger='click'>
        <img className='header-img' src={Images.gift} alt='' />
      </Popover>
      <div className='header-div1'>
        <img className='header-img' src={Images.sms} alt='' />
        <img className='header-img1' src={Images.headerIcon1} alt='' />
        <span className='header-span1'>11</span>
      </div>
      {user && (
        <Popover
          placement='bottomRight'
          content={<CardInfor user={user} />}
          trigger='click'
        >
          <p className='header-p1'>
            {user.username} <i className='fa-solid fa-angle-down'></i>
          </p>
        </Popover>
      )}
    </div>
  )
}

export default HeaderComponent
