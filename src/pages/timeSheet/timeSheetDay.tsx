import {Button, DatePicker, Radio, Table} from 'antd'
import moment from 'moment'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {
  selectListTimeSheet,
  timeSheetAction,
} from '../../feature/timeSheet/timeSheetSlice'
import {PersonnelModel} from '../../models/personnel'
import {FILE} from '../../utils/constants'

const TimeSheetDay = () => {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const dispatch = useAppDispatch()
  const listTimeSheet = useAppSelector(selectListTimeSheet)
  const [workingDay, setWorkingDay] = useState<string>(moment().format())
  const [id, setId] = useState<string>('')
  const [status, setStatus] = useState<number>()
  const createTimeSheets = () => {
    console.log(111)
    dispatch(timeSheetAction.createTimeSheets({workingDay}))
  }
  console.log(1111, listTimeSheet)
  console.log(444, id)
  useEffect(() => {
    if (id && status)
      dispatch(
        timeSheetAction.updateTimeSheet({_id: id, status: Number(status)})
      )
  }, [id, status, dispatch])
  const columnsTableCreateTimeSheet = [
    {
      title: 'Ảnh',
      dataIndex: 'personnel',
      render: (personnel: PersonnelModel) => (
        <img
          src={`${FILE}/${personnel.avatar}`}
          alt='avatar'
          style={{width: '70px', height: '70px', objectFit: 'cover'}}
        />
      ),
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'personnel',
      render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
    },
    {
      title: 'Giới tính',
      dataIndex: 'personnel',
      render: (personnel: PersonnelModel) => <span>{personnel.sex}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'personnel',
      render: (personnel: PersonnelModel) => <span>{personnel.email}</span>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status: number) => (
        <>
          <Radio.Group
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <Radio
              value={1}
              defaultChecked={status === 1 ? true : false}
              onClick={() => {
                setStatus(1)
              }}
            >
              Nghỉ
            </Radio>
            <Radio
              value={2}
              defaultChecked={status === 2 ? true : false}
              onClick={() => setStatus(2)}
            >
              làm nửa ngày
            </Radio>
            <Radio
              value={3}
              defaultChecked={status === 3 ? true : false}
              onClick={() => setStatus(3)}
            >
              làm cả ngày
            </Radio>
          </Radio.Group>
        </>
      ),
    },
  ]
  return (
    <div>
      <DatePicker
        // defaultValue={moment('01/01/2015', dateFormatList[0])}
        // value={workingDay}
        format={dateFormatList}
        onChange={(e) => {
          console.log(1111, moment(e).format())
          setWorkingDay(moment(e).format())
        }}
        style={{marginRight: '1rem'}}
      />
      <Button
        type='primary'
        onClick={() => {
          createTimeSheets()
        }}
      >
        Tạo dữ liệu chấm công ngày: {moment(workingDay).format('DD/MM/YYYY')}
      </Button>
      <Table
        columns={columnsTableCreateTimeSheet}
        dataSource={listTimeSheet}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(4444, record)
              // setDataRow(record)
              setId(record._id)
            }, // click row
          }
        }}
      />
    </div>
  )
}

export default TimeSheetDay
