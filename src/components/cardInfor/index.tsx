import React from 'react'
import { useTranslation } from 'react-i18next'
import BBtn from '../button'
import './cardInfor.css'

const CardInfor = () => {
  const {t}=useTranslation()
  return (
    <div className='ci_div1'>
      <img
        src='data:image/png;base64,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'
        alt=''
        className='ci_img1'
      />
      <p className='ci_p1'>Green App</p>
      <p className='ci_p2'>Admin</p>
      <p className='ci_p3'>greenapp@kicks.kr</p>
      <p style={{borderTop: '1px solid #E1E1E1'}}></p>
      <div className='ci_div2'>
        <BBtn title={t('button.changePassword')} color='#24BB69' />
        <BBtn title={t('button.logOut')} />
      </div>
    </div>
  )
}

export default CardInfor
