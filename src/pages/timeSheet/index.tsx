import {Tabs} from 'antd'
import React from 'react'
import TimeSheetDay from './timeSheetDay'

const TimeSheet = () => {
  const items = [
    {
      label: 'Chấm công theo ngày',
      key: '1',
      children: (
        <>
          <TimeSheetDay />
        </>
      ),
    }, // remember to pass the key prop
    {label: 'Lịch sử chấm công', key: '2', children: <>Lịch sử chấm công</>},
  ]
  return (
    <div>
      <Tabs items={items} />
    </div>
  )
}

export default TimeSheet
