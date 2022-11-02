import {Button, Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import {url} from 'inspector'
import React, {useState, useEffect} from 'react'
import axiosClient from '../../apis/axiosClient'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
//   {
//     title: 'Rank',
//     dataIndex: 'rank',
//   },
//   {
//     title: 'Department',
//     dataIndex: 'department',
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//   },
//   {
//     title: 'PhoneNumber',
//     dataIndex: 'phoneNumber',
//   },
//   {
//     title: 'CitizenIdentification',
//     dataIndex: 'citizenIdentification',
//   },
//   {
//     title: 'CreatedAt',
//     dataIndex: 'createdAt',
//   },
//   {
//     title: 'Department',
//     dataIndex: 'department',
//   },
//   {
//     title: 'Department',
//     dataIndex: 'department',
//   },
//   {
//     title: 'Department',
//     dataIndex: 'department',
//   },
//   {
//     title: 'Department',
//     dataIndex: 'department',
//   },
// ]

// const data: DataType[] = []
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   })
// }

const TableCustom = (props: {url: string; urlColumn: string}) => {
  const [limit, setLimit] = useState<number>(20)
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<any>([])
  const [columns, setColumns] = useState<ColumnsType<DataType>>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState<number>(20)

  useEffect(() => {
    const getListData = async () => {
      const data: {list: []; total: number} = await axiosClient.getService(
        props.url,
        {limit, page}
      )
      console.log(456, data)
      const newData = data.list.map((item: any) => {
        return {...item, key: item._id}
      })
      console.log(newData)
      setData(newData)
      // setTotal(data.total)
    }
    getListData()
  }, [limit, page, props.url])
  useEffect(() => {
    const getColumn = async () => {
      const column: string[] = await axiosClient.getService(props.urlColumn)
      console.log(3333, column)
      const newColumn = column.map((item) => {
        return {title: item, dataIndex: item}
      })
      setColumns(newColumn)
      console.log(4444, newColumn)
    }
    getColumn()
  }, [props.urlColumn])
  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <div>
      <div style={{marginBottom: 16}}>
        {/* <Button
          type='primary'
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button> */}
        <span style={{marginLeft: 8}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{pageSize: 20, total: total}}
        scroll={{y: 240}}
        onChange={(e) => console.log(e)}
      />
    </div>
  )
}

export default TableCustom
