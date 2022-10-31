import React from 'react'
import {useTranslation} from 'react-i18next'
import {UserModel} from '../../models/user.model'
import {FILE} from '../../utils/constants'
import BBtn from '../button'
import './cardInfor.css'

const CardInfor = (props: {user: UserModel}) => {
  const {t} = useTranslation()
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
        <BBtn title={t('button.changePassword')} color='#24BB69' />
        <BBtn title={t('button.logOut')} />
      </div>
    </div>
  )
}

export default CardInfor
