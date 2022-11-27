import {DatePicker} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnSummaryOfWorkingDays} from '../../utils/columnTable'

const TimeSheetTablePage = () => {
  const [day, setDay] = useState<string>()
  return (
    <>
      <div>
        <div>
          <p style={{marginBottom: '0.5rem', marginTop: '2rem'}}>
            Chọn tháng:{' '}
          </p>
          <DatePicker
            onChange={(e) => {
              console.log(e?.format('MM/YYYY'))
              setDay(e?.format())
            }}
            picker='month'
          />
        </div>
        <p
          style={{fontSize: '30px', textAlign: 'center'}}
        >{`Bảng tổng hợp công tháng ${moment(day).format('MM YYYY')}`}</p>
        <TableCustom
          disableEdit
          url={urlApi.summaryOfWorkingDays}
          columns={columnSummaryOfWorkingDays}
          disableAdd
          disableDelete
          paramsHeader={{day}}
          searchName
        />
      </div>
    </>
  )
}

export default TimeSheetTablePage
