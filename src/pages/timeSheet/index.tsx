import {Tabs} from 'antd'
import React from 'react'

const TimeSheet = () => {
  const items = [
    {label: 'Chấm công theo ngày', key: '1', children: <>ádsda</>}, // remember to pass the key prop
    {label: 'Lịch sử chấm công', key: '2', children: <>Lịch sử chấm công</>},
  ]
  return (
    <div>
      <Tabs items={items} />
    </div>
  )
}

export default TimeSheet
