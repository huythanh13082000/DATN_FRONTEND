import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsUser} from '../../utils/columnTable'

const User = () => {
  return (
    <div>
      <TableCustom columns={columnsUser} url={urlApi.user} />
    </div>
  )
}

export default User
