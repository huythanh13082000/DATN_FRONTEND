import {EditOutlined} from '@ant-design/icons'
import {Button, Drawer, Tooltip} from 'antd'
import React, {useState} from 'react'

const UpdatePage = (props: {
  url: string
  id: string
  open: boolean
  setOpen: () => void
}) => {
  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={() => {
          props.setOpen()
        }}
        open={props.open}
      >
        ádsadsdasda
      </Drawer>
    </>
  )
}

export default UpdatePage
