import {DeleteOutlined, EditOutlined, FileAddOutlined} from '@ant-design/icons'
import {Button, Col, message, Row, Table, Tooltip} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import React, {useState, useEffect} from 'react'
import axiosClient from '../../apis/axiosClient'
import CreatePage from './drawerCreate'
import UpdatePage from './drawerUpdate'
import DrawerUpdatePage from './drawerUpdate'

const TableCustom = (props: {url: string; columns: ColumnsType<{}>}) => {
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<any>([])
  const [columns, setColumns] = useState<any>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [total, setTotal] = useState<number>(0)
  const [dataRow, setDataRow] = useState<any>()
  const [openUpdate, setOpenUpdate] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  useEffect(() => {
    setColumns([
      ...props.columns,
      {
        title: 'Hành động',
        dataIndex: '_id',
        render: (text: string) => (
          <Tooltip title='Sửa' style={{marginRight: '1rem'}}>
            <Button
              onClick={() => {
                setOpenUpdate(true)
              }}
            >
              <EditOutlined />
            </Button>
          </Tooltip>
        ),
      },
    ])
  }, [props.columns])

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
  }, [limit, page, props.url, openUpdate, openCreate])

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
          {hasSelected ? `Chọn ${selectedRowKeys.length} bản ghi` : ''}
        </span>
        <div style={{display: 'flex'}}>
          {selectedRowKeys.length > 0 ? (
            <Tooltip title='Xóa' style={{marginRight: '1rem'}}>
              <Button onClick={() => handleDelete()}>
                <DeleteOutlined />
              </Button>
            </Tooltip>
          ) : null}
          <div style={{margin: '0 8px'}}></div>
          <Tooltip title='Thêm'>
            <Button onClick={() => setOpenCreate(true)}>
              <FileAddOutlined />
            </Button>
          </Tooltip>
        </div>
      </Row>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{pageSize: limit, total: total}}
        scroll={{y: 240}}
        onChange={(e) => {
          setPage(Number(e.current))
          setLimit(Number(e.pageSize))
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(4444, record)
              setDataRow(record)
            }, // click row
          }
        }}
      />
      {openUpdate && (
        <UpdatePage
          dataRow={dataRow}
          url={props.url}
          open={openUpdate}
          setOpen={() => {
            setOpenUpdate(false)
          }}
        />
      )}
      {openCreate && (
        <CreatePage
          url={props.url}
          open={openCreate}
          setOpen={() => {
            setOpenCreate(false)
          }}
        />
      )}
    </div>
  )
}

export default TableCustom
