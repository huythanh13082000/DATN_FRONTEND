import {Col, Row, Space, Switch} from 'antd'
import React, {useState} from 'react'
import ISearch from '../../components/search'
import ITable from '../../components/table'

const Permission = () => {
  return (
    <div>
      <br />
      <p className='org_title'>Role Permission</p>
      <Row gutter={24}>
        <Col span={24} className='gutter-row'>
          <div className='org_div1'>
            <div>
              <ISearch onChange={() => console.log(111)} justify='center' />
            </div>
            <br />
            <ITable
              // onClickRow={(params: any) => setDataOrg(params)}
              column={[
                {
                  title: 'Permissions',
                  dataIndex: 'permissions',
                },
                {
                  title: 'Admin',
                  dataIndex: 'admin',
                  render: () => (
                    <Space size='middle'>
                      <Switch />
                    </Space>
                  ),
                },
                {
                  title: 'Fleetmanager',
                  dataIndex: 'fleetmanager',
                  render: () => (
                    <Space size='middle'>
                      <Switch />
                    </Space>
                  ),
                },
              ]}
              total={100}
              data={[
                {
                  key: '1',
                  id: '1',
                  permissions: 'Medical Assistant',
                  Admin: true,
                  Fleetmanager: true,
                },
                {
                  key: '2',
                  id: '2',
                  permissions: 'Marketing Coordinator',
                  Admin: true,
                  Fleetmanager: true,
                },
                {
                  key: '3',
                  id: '3',
                  permissions: 'Dog Trainer',
                  Admin: true,
                  Fleetmanager: true,
                },
              ]}
              pageSize={20}
              onChangePage={(page) => {
                console.log('page', page)
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Permission
