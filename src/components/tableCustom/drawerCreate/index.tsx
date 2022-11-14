import {Drawer} from 'antd'
import React from 'react'
import CreateAllowance from '../../../pages/allowance/createAllowance'
import CreateBonus from '../../../pages/bonus/createBonus'
import CreateDepartment from '../../../pages/department/createDepartment'
import CreateFine from '../../../pages/fine/createFine'
import PersonnelCreate from '../../../pages/personnel/createPersonnel'
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
      case Url.personnel:
        return <PersonnelCreate />
      case Url.bonus:
        return <CreateBonus />
      case Url.allowance:
        return <CreateAllowance />
      case Url.fine:
        return <CreateFine />
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
