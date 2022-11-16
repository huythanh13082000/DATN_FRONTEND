import {Tabs} from 'antd'
import React from 'react'
import HistoryTimeSheets from './historyTimeSheets'
import TimeSheetDay from './timeSheetDay'

const TimeSheet = () => {
  const items = [
    // {
    //   label: 'Chấm công theo ngày',
    //   key: '1',
    //   children: (
    //     <>
    //       <TimeSheetDay />
    //     </>
    //   ),
    // },
    {
      label: 'Lịch sử chấm công',
      key: '2',
      children: (
        <>
          <HistoryTimeSheets />
        </>
      ),
    },
  ]
  return (
    <div>
      <Tabs items={items} />
    </div>
  )
}

export default TimeSheet
