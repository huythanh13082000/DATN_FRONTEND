import {Col, Row} from 'antd'
import React, {useState} from 'react'
import BBtn from '../../components/button'
import ITable from '../../components/table'
import InputGroup from '../../components/textInput'

const Fleets = () => {
  const [dataRole, setDataRole] = useState<any>()
  const [openAdd, setOpenAdd] = useState(false)
  return (
    <div>
      <br />
      <div className='role_div1'>
        <p className='role_title'>Fleets</p>
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
              <p className='org_p1'>Add Fleet</p>
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
            <Col span={24} className='gutter-row'>
              <div className='org_div1'>
                <ITable
                  onClickRow={(params: any) => setDataRole(params)}
                  column={[
                    {
                      title: 'ID',
                      dataIndex: 'id',
                    },
                    {
                      title: 'Name',
                      dataIndex: 'name',
                      // sorter: (a: any, b: any) => a.name.length - b.name.length,
                    },
                    {
                      title: 'Supported Email',
                      dataIndex: 'supportedEmail',
                    },

                    {
                      title: 'Visibility',
                      dataIndex: 'visibility',
                      render: (text: string) => (
                        <span
                          style={{
                            backgroundColor:
                              text === 'Public' ? '#1EA85D' : '#F2B71E',
                            color: 'white',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '2px',
                          }}
                        >
                          {text}
                        </span>
                      ),
                    },
                    {
                      title: 'Location',
                      dataIndex: 'location',
                    },
                    {
                      title: 'Billing',
                      dataIndex: 'billing',
                    },
                    {
                      title: 'Created Date',
                      dataIndex: 'createdDate',
                    },
                  ]}
                  total={100}
                  data={[
                    {
                      key: '1',
                      id: '1',
                      name: 'sadsda',
                      supportedEmail: 'alma.lawson@gmail.com',
                      visibility: 'Private',
                      location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
                      billing: 'Joyride plan',
                      createdDate: '2014/12/24 23:12:00',
                    },
                    {
                      key: '2',
                      id: '2',
                      name: 'John Brown',
                      supportedEmail: 'alma.lawson@gmail.com',
                      visibility: 'Public',
                      location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
                      billing: 'Joyride plan',
                      createdDate: '2014/12/24 23:12:00',
                    },
                    {
                      key: '3',
                      id: '3',
                      name: 'jsadjasd',
                      supportedEmail: 'alma.lawson@gmail.com',
                      visibility: 'Public',
                      location: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
                      billing: 'Joyride plan',
                      createdDate: '2014/12/24 23:12:00',
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

export default Fleets
