import {Drawer} from 'antd'
import React from 'react'
import CreateDepartment from '../../../pages/department/createDepartment'
import RankCreate from '../../../pages/rank/rankCreate'
import {Url} from '../../../routers/paths'

const CreatePage = (props: {
  url: string
  open: boolean
  setOpen: () => void
}) => {
  const renderComponent = () => {
    switch (props.url) {
      case Url.department:
        return <CreateDepartment />
      case Url.rank:
        return <RankCreate />
      default:
        break
    }
  }
  console.log(props.url)
  return (
    <>
      <Drawer
        title='Create Data'
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

export default CreatePage
