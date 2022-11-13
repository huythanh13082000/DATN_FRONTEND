import {EditOutlined} from '@ant-design/icons'
import {Button, Drawer, Tooltip} from 'antd'
import React, {useEffect, useState} from 'react'
import UpdateAllowance from '../../../pages/allowance/updateAllowance'
import CreateBonus from '../../../pages/bonus/createBonus'
import UpdateBonus from '../../../pages/bonus/updateBonus'
import UpdateDepartment from '../../../pages/department/updateDepartment'
import PersonnelUpdate from '../../../pages/personnel/updatePersonnel'
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
      case Url.personnel:
        return <PersonnelUpdate data={props.dataRow} />
      case Url.bonus:
        return <UpdateBonus data={props.dataRow} />
      case Url.allowance:
        return <UpdateAllowance data={props.dataRow} />
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
