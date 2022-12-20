import {Col, Input, Row, Tabs} from 'antd'
import React, {useState} from 'react'
import HistoryTimeSheets from './historyTimeSheets'

const TimeSheet = () => {

  const items = [
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
