import {Col, Row, Select} from 'antd'
import {SizeType} from 'antd/lib/config-provider/SizeContext'
import {Option} from 'antd/lib/mentions'
import React, {useState} from 'react'
import BBtn from '../../components/button'
import ISearch from '../../components/search'
import ITable from '../../components/table'
import InputGroup from '../../components/textInput'

const children: React.ReactNode[] = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const Fleets = () => {
  const [dataFleet, setDataFleet] = useState<any>(true)
  const [openAdd, setOpenAdd] = useState(false)
  const [size, setSize] = useState<SizeType>('middle')
  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`)
  }
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span style={{marginRight: '1rem'}}>Show</span>
                  <Select
                    size={size}
                    defaultValue={'Show'}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                  <span style={{marginLeft: '1rem', marginRight: '3rem'}}>
                    Entries
                  </span>
                  <ISearch onChange={() => console.log(222)} />
                </div>
                <br />
                <ITable
                  onClickRow={(params: any) => setDataFleet(params)}
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

            {dataFleet && (
              <>
                <Col span={24} className='gutter-row'>
                  <br />
                  <br />
                  <div style={{display: 'flex'}}>
                    <BBtn title='Edit' color='#2C405A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='General' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Company' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Mail Configuration' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Vehicle Configuration' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Timeline' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Operation' color='#FF5C6A' />
                    <span style={{width: '0.5rem'}}></span>
                    <BBtn title='Pre Ride Screen' color='#FF5C6A' />
                  </div>
                </Col>
                <Col span={24} className='gutter-row'>
                  <div className='org_div1'>
                    <Row gutter={16}>
                      <Col span={12}>
                        <InputGroup
                          required={true}
                          title='Name'
                          name='name'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                      <Col span={12}>
                        <InputGroup
                          title='Country'
                          name='country'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                      <Col span={12}>
                        <InputGroup
                          required={true}
                          title='Alert Email'
                          name='alertEmail'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                      <Col span={12}>
                        <InputGroup
                          required={true}
                          title='Visiblity'
                          name='visiblity'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                      <Col span={12}>
                        <InputGroup
                          disabled
                          required={true}
                          title='Latitude'
                          name='latitude'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                      <Col span={12}>
                        <InputGroup
                          disabled
                          required={true}
                          title='Longiude'
                          name='longiude'
                          onChange={() => console.log(111)}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row style={{borderTop: '1px solid #E1E1E1'}}></Row>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                      <BBtn
                        title='Delete'
                        color='#FF5C6A'
                        onClick={() => setOpenAdd(false)}
                      />
                      <BBtn title='Save Changes' color='#24BB69' />
                    </div>
                  </div>
                </Col>
              </>
            )}
          </>
        )}
      </Row>
    </div>
  )
}

export default Fleets
