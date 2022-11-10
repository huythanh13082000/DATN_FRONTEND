import {DatePicker, Table} from 'antd'
import moment from 'moment'
import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {
  selectListPersonnelTimeSheet,
  timeSheetAction,
} from '../../feature/timeSheet/timeSheetSlice'
import { columnsTableCreateTimeSheet } from '../../utils/columnTable'

const TimeSheetDay = () => {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const dispatch = useAppDispatch()
  const listPersonnelTimeSheet = useAppSelector(selectListPersonnelTimeSheet)
  useEffect(() => {
    dispatch(timeSheetAction.getListPersonnelTimeSheet())
  }, [dispatch])
  console.log(1111, listPersonnelTimeSheet)
  return (
    <div>
      {' '}
      <DatePicker
        defaultValue={moment('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
      />
      <Table columns={columnsTableCreateTimeSheet} dataSource={listPersonnelTimeSheet} />
    </div>
  )
}

export default TimeSheetDay
