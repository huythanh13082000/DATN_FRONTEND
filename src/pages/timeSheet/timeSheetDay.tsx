import {DatePicker, Radio, Table} from 'antd'
import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {
  selectListPersonnelTimeSheet,
  timeSheetAction,
} from '../../feature/timeSheet/timeSheetSlice'
import {RankModel} from '../../models/rank'
import { columnsTableCreateTimeSheet } from '../../utils/columnTable'
import {FILE} from '../../utils/constants'

const TimeSheetDay = () => {
  // const columnsTableCreateTimeSheet = [
  //   {
  //     title: 'Ảnh',
  //     dataIndex: 'avatar',
  //     render: (avatar: string) => (
  //       <img
  //         src={`${FILE}/${avatar}`}
  //         alt='avatar'
  //         style={{width: '70px', height: '70px', objectFit: 'cover'}}
  //       />
  //     ),
  //   },
  //   {
  //     title: 'Tên nhân viên',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: 'Chức vụ',
  //     dataIndex: 'rank',
  //     render: (rank: RankModel) => <span>{rank && rank.name}</span>,
  //   },
  //   {
  //     title: 'Giới tính',
  //     dataIndex: 'sex',
  //   },

  //   {
  //     title: 'Trạng thái',
  //     dataIndex: 'status',
  //     render: (status: boolean) => (
  //       <Radio.Group>
  //         <Radio value={1}>Nghỉ</Radio>
  //         <Radio value={2}>làm nửa ngày</Radio>
  //         <Radio value={3}>làm cả ngày</Radio>
  //       </Radio.Group>
  //     ),
  //   },
  // ]
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const dispatch = useAppDispatch()
  const listPersonnelTimeSheet = useAppSelector(selectListPersonnelTimeSheet)
  const [workingDay, setWorkingDay] = useState<string>('')

  useEffect(() => {
    dispatch(timeSheetAction.getListPersonnelTimeSheet())
  }, [dispatch])

  console.log(1111, listPersonnelTimeSheet)
  return (
    <div>
      <DatePicker
        defaultValue={moment('01/01/2015', dateFormatList[0])}
        format={dateFormatList}
        onChange={(e) => {
          console.log(1111, moment(e).format())
          setWorkingDay(moment(e).format())
        }}
      />
      <Table
        columns={columnsTableCreateTimeSheet}
        dataSource={listPersonnelTimeSheet}
      />
    </div>
  )
}

export default TimeSheetDay
