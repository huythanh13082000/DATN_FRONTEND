import React from 'react'
import TableCustom from '../../components/tableCustom'
import { Url } from '../../routers/paths'
import { personnelDayOffColumn } from '../../utils/columnTable'

const PersonnelDayOff = () => {
  return (
    <div><TableCustom url={Url.personnelDayOff} columns={personnelDayOffColumn}/></div>
  )
}

export default PersonnelDayOff