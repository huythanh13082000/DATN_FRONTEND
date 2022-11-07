import {EditOutlined} from '@ant-design/icons'
import {Button, Drawer, Tooltip} from 'antd'
import React, {useEffect, useState} from 'react'
import UpdateDepartment from '../../../pages/department/updateDepartment'
import RankUpdate from '../../../pages/rank/rankUpdate'
import {Url} from '../../../routers/paths'

const UpdatePage = (props: {
  url: string
  dataRow: any
  open: boolean
  setOpen: () => void
}) => {
  const renderComponent = () => {
    switch (props.url) {
      case Url.department:
        return <UpdateDepartment data={props.dataRow} />
      case Url.rank:
        return <RankUpdate data={props.dataRow} />
      default:
        break
    }
  }
  console.log(props.url)
  return (
    <>
      <Drawer
        title='Update Data'
        onClose={() => {
          props.setOpen()
        }}
        open={props.open}
        placement={'right'}
      >
        {renderComponent()}
      </Drawer>
    </>
  )
}

export default UpdatePage
