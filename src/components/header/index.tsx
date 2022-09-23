import {Popover} from 'antd'
import React from 'react'
import Images from '../../assets/gen'
import CardHelp from '../cardHelp'
import CardInfor from '../cardInfor'
import './header.css'

const content = <CardInfor />
const content1 = <CardHelp />

const buttonWidth = 70

const HeaderComponent = () => {
  return (
    <div className='header-container'>
      <Popover placement='bottomLeft' content={content1} trigger='click'>
        <img className='header-img' src={Images.headerIcon} alt='' />
      </Popover>

      <img className='header-img' src={Images.gift} alt='' />
      <div className='header-div1'>
        <img className='header-img' src={Images.sms} alt='' />
        <img className='header-img1' src={Images.headerIcon1} alt='' />
        <span className='header-span1'>11</span>
      </div>

      <Popover placement='bottomRight' content={content} trigger='click'>
        <p className='header-p1'>
          GreenApp <i className='fa-solid fa-angle-down'></i>
        </p>
      </Popover>
    </div>
  )
}

export default HeaderComponent
