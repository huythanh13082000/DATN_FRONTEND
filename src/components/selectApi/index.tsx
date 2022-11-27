import {Select} from 'antd'
import React, {useEffect, useState} from 'react'
import axiosClient from '../../apis/axiosClient'

const SelectApi = (props: {
  url: string
  field: string
  setField: (params: string) => void
}) => {
  const [data, setData] = useState<{value: string; label: string}[]>([])
  useEffect(() => {
    const getListData = async () => {
      const data: {list: []; total: number} = await axiosClient.getService(
        props.url,
        {limit: 100, page: 1, name: ''}
      )
      const newData = data.list.map((item: {_id: string; name: string}) => {
        return {value: item._id, label: item.name}
      })
      setData(newData)
    }
    getListData()
  }, [props.url])
  console.log(555, props.field)
  return (
    <div style={{width: '100%'}}>
      <Select
        status={!props.field ? 'error' : ''}
        defaultValue={props.field}
        showSearch
        value={props.field}
        style={{width: '100%'}}
        placeholder='Search to Select'
        optionFilterProp='children'
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={data}
        onChange={(e) => {
          props.setField(e)
          console.log(e)
        }}
      />
    </div>
  )
}

export default SelectApi
