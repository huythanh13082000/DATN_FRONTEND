import {DeleteOutlined, FileAddOutlined} from '@ant-design/icons'
import {Button, Col, message, Row, Table, Tooltip} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import React, {useState, useEffect} from 'react'
import axiosClient from '../../apis/axiosClient'

const TableCustom = (props: {url: string; columns: ColumnsType<{}>}) => {
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<any>([])
  // const [columns, setColumns] = useState<ColumnsType<DataType>>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const getListData = async () => {
      const data: {list: []; total: number} = await axiosClient.getService(
        props.url,
        {limit, page}
      )
      const newData = data.list.map((item: any) => {
        return {...item, key: item._id}
      })
      console.log(newData)
      setData(newData)
      setTotal(data.total)
    }
    getListData()
  }, [limit, page, props.url])

  const handleDelete = async () => {
    const messageDelete = await axiosClient.deleteService(props.url, {
      ids: selectedRowKeys,
    })
    message.info(messageDelete)
    const data: {list: []; total: number} = await axiosClient.getService(
      props.url,
      {limit, page}
    )
    const newData = data.list.map((item: any) => {
      return {...item, key: item._id}
    })
    setData(newData)
    setTotal(data.total)
    setSelectedRowKeys([])
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
      <Row justify='space-between' align='middle' style={{marginTop: '2rem'}}>
        <span style={{marginLeft: 8}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        <div style={{display: 'flex'}}>
          <Tooltip title='Thêm'>
            <Button>
              <FileAddOutlined />
            </Button>
          </Tooltip>
          <div style={{margin: '0 8px'}}></div>
          {selectedRowKeys.length > 0 ? (
            <Tooltip title='Xóa' style={{marginRight: '1rem'}}>
              <Button>
                <DeleteOutlined onClick={() => handleDelete()} />
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </Row>

      <Table
        rowSelection={rowSelection}
        columns={props.columns}
        dataSource={data}
        pagination={{pageSize: limit, total: total}}
        scroll={{y: 240}}
        onChange={(e) => {
          setPage(Number(e.current))
          setLimit(Number(e.pageSize))
        }}
      />
    </div>
  )
}

export default TableCustom
