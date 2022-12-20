import {Col, Input, message, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {urlApi} from '../../apis/url'
import {useAppSelector} from '../../app/hooks'
import TableCustom from '../../components/tableCustom'
import {selectUser} from '../../feature/auth/authSlice'
import {columnsUser} from '../../utils/columnTable'

const User = () => {
  const user = useAppSelector(selectUser)
  const [filter, setFilter] = useState<any>()
  return (
    <div>
      {user?.role === 'admin' ? (
        <>
          <Row gutter={16}>
            <Col span={4}>
              <p>Tìm kiếm theo email: </p>
              <Input
                placeholder='Nhập email:'
                onChange={(e) => setFilter({...filter, email: e.target.value})}
              />
            </Col>
          </Row>
          <TableCustom
            columns={columnsUser}
            url={urlApi.user}
            disableExportExcel
            filter={filter}
          />
        </>
      ) : (
        <>Không có quyền thao tác!</>
      )}
    </div>
  )
}

export default User
