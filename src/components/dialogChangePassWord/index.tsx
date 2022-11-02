import {Button, Input, message, Modal} from 'antd'
import {t} from 'i18next'
import React, {useState} from 'react'
import {useAppDispatch} from '../../app/hooks'
import {authActions} from '../../feature/auth/authSlice'
import BBtn from '../button'

const ChangePassWord: React.FC = () => {
  const dispatch = useAppDispatch()
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')
  const [open, setOpen] = useState(false)
  const [newPassWord, setNewPassWord] = useState<string>('')
  const [oldPassWord, setOldPassWord] = useState<string>('')
  const [confirmPassWord, setConfirmPassWord] = useState<string>('')

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')

    if (newPassWord !== confirmPassWord)
      return message.error('!Confirm PassWord Wrong')

    dispatch(authActions.changePassWord({newPassWord, oldPassWord}))
    // setTimeout(() => {
    //   setOpen(false)
    //   setConfirmLoading(false)
    // }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  return (
    <>
      {/* <Button type='primary' onClick={showModal}>
        Open Modal with async logic
      </Button> */}
      <BBtn
        title={t('button.changePassword')}
        color='#24BB69'
        onClick={() => {
          showModal()
        }}
      />
      <Modal
        title='Change Password'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          style={{marginBottom: '1rem'}}
          placeholder='Old PassWord'
          type='PassWord'
          value={oldPassWord}
          onChange={(e) => {
            setOldPassWord(e.target.value)
          }}
        />
        <Input
          placeholder='New PassWord'
          type='PassWord'
          style={{marginBottom: '1rem'}}
          value={newPassWord}
          onChange={(e) => {
            setNewPassWord(e.target.value)
          }}
        />
        <Input
          placeholder='Confirm PassWord'
          type='PassWord'
          value={confirmPassWord}
          onChange={(e) => {
            setConfirmPassWord(e.target.value)
          }}
        />
      </Modal>
    </>
  )
}

export default ChangePassWord
