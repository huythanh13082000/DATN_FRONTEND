import {Col, Row} from 'antd'
import React, {useState} from 'react'
import BBtn from '../../components/button'
import ITable from '../../components/table'
import InputGroup from '../../components/textInput'
import './role.css'

const Role = () => {
  const [dataRole, setDataRole] = useState<any>()
  const [openAdd, setOpenAdd] = useState(false)
  return (
    <div>
      <br />
      <div className='role_div1'>
        <p className='role_title'>Role List</p>
        <BBtn
          color='#FF5C6A'
          title='Add Role'
          onClick={() => setOpenAdd(true)}
        />
      </div>

      <Row gutter={24}>
        {openAdd ? (
          <Col span={12} className='gutter-row'>
            <div className='org_div1'>
              <p className='org_p1'>Add Role</p>
              <Row gutter={16}>
                <Col span={12}>
                  <InputGroup
                    required={true}
                    title='Role Name'
                    name='roleName'
                    onChange={() => console.log(111)}
                  />
                </Col>
              </Row>
              <br />
              <Row style={{borderTop: '1px solid #E1E1E1'}}></Row>
              <br />
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <BBtn
                  title='Back'
                  color='#FF5C6A'
                  onClick={() => setOpenAdd(false)}
                />
                <BBtn title='Save Changes' color='#24BB69' />
              </div>
            </div>
          </Col>
        ) : (
          <>
            <Col span={dataRole ? 12 : 24} className='gutter-row'>
              <div className='org_div1'>
                <ITable
                  onClickRow={(params: any) => setDataRole(params)}
                  column={[
                    {
                      title: 'ID',
                      dataIndex: 'id',
                      // render: (text: string) => <a>{text}</a>,
                      sorter: (a: any, b: any) => a.id - b.id,
                    },
                    {
                      title: 'Name',
                      dataIndex: 'name',
                      sorter: (a: any, b: any) => a.name.length - b.name.length,
                    },
                    {
                      title: 'Created',
                      dataIndex: 'created',
                    },
                  ]}
                  total={100}
                  data={[
                    {
                      key: '1',
                      id: '1',
                      name: 'sadsda',
                      created: '2014/12/24 23:12:00',
                    },
                    {
                      key: '2',
                      id: '2',
                      name: 'John Brown',
                      created: '2014/12/25 23:12:00',
                    },
                    {
                      key: '3',
                      id: '3',
                      name: 'jsadjasd',
                      created: '2014/12/26 23:12:00',
                    },
                  ]}
                  pageSize={20}
                  onChangePage={(page) => {
                    console.log('page', page)
                  }}
                />
              </div>
            </Col>

            {dataRole && (
              <Col span={12} className='gutter-row'>
                <div className='org_div1'>
                  <p className='org_p1'>Edit Role</p>
                  <Row gutter={16}>
                    <Col span={12}>
                      <InputGroup
                        required={true}
                        title='Role Name'
                        name='roleName'
                        onChange={() => console.log(111)}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row style={{borderTop: '1px solid #E1E1E1'}}></Row>
                  <br />
                  <div
                    style={{display: 'flex', justifyContent: 'space-between'}}
                  >
                    <BBtn
                      title='Back'
                      color='#FF5C6A'
                      onClick={() => setDataRole(undefined)}
                    />
                    <BBtn title='Save Changes' color='#24BB69' />
                  </div>
                </div>
              </Col>
            )}
          </>
        )}
      </Row>
    </div>
  )
}

export default Role
