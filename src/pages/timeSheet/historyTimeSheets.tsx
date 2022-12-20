import {Button, DatePicker, message} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import axiosClient from '../../apis/axiosClient'
import {urlApi} from '../../apis/url'
import {useAppDispatch} from '../../app/hooks'
import TableCustom from '../../components/tableCustom'
import {columnsTableTimeSheet} from '../../utils/columnTable'

const HistoryTimeSheets = () => {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  const dispatch = useAppDispatch()
  const [workingDay, setWorkingDay] = useState<string>(moment().format())
  const deleteTimeSheets = async () => {
    try {
      const data: {description: string} = await axiosClient.deleteService(
        urlApi.timeSheet,
        {workingDay}
      )
      console.log(4444, data)
      message.success(data.description)
    } catch (error) {
      message.success('xóa dữ liệu Thất bại')
    }
  }
  return (
    <div>
      <TableCustom
        url={urlApi.timeSheet}
        columns={columnsTableTimeSheet}
        disableAdd
        disableEdit
        disableExportExcel
      />
    </div>
  )
}

export default HistoryTimeSheets
