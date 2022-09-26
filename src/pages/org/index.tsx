import React, {useState} from 'react'
import {Col, Row, Select} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import {Option} from 'antd/lib/mentions'
import BBtn from '../../components/button'
import ITable from '../../components/table'
import InputGroup from '../../components/textInput'
import './org.css'
// import {OrgModel} from '../../models/org.model'

const Org = () => {
  const [dataOrg, setDataOrg] = useState<any>()
  const [dataOrgUser, setDataOrgUser] = useState<any>()
  console.log(111, dataOrg)
  return (
    <div>
      <br />
      <p className='org_title'>Org</p>
      <Row gutter={24}>
        <Col span={dataOrg ? 12 : 24} className='gutter-row'>
          <div className='org_div1'>
            <ITable
              onClickRow={(params: any) => setDataOrg(params)}
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
        {dataOrg && (
          <Col span={12} className='gutter-row'>
            <div className='org_div1'>
              <p className='org_p1'>편집 Org</p>
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
                  <span className='org_address'>Country</span>
                  <Select
                    showSearch
                    style={{width: '100%', marginTop: '4px'}}
                    size='middle'
                    // placeholder='Search to Select'
                    optionFilterProp='children'
                    filterOption={(input, option) =>
                      (option!.children as unknown as string).includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA!.children as unknown as string)
                        .toLowerCase()
                        .localeCompare(
                          (optionB!.children as unknown as string).toLowerCase()
                        )
                    }
                  >
                    <Select.Option value='1'>Not Identified</Select.Option>
                    <Select.Option value='2'>Closed</Select.Option>
                    <Select.Option value='3'>Communicated</Select.Option>
                    <Select.Option value='4'>Identified</Select.Option>
                    <Select.Option value='5'>Resolved</Select.Option>
                    <Select.Option value='6'>Cancelled</Select.Option>
                  </Select>
                </Col>
                <Col span={12}>
                  <InputGroup
                    required={true}
                    title='Alias'
                    name='alias'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Type'
                    name='type'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <span className='org_address'>Address</span>
                  <TextArea
                    maxLength={100}
                    style={{height: 40, marginTop: '5px'}}
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='City'
                    name='city'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Postal/Zip Code '
                    name='postalZip'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Tax ID'
                    name='taxId'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <span className='org_address'>Address</span>
                  <Select
                    showSearch
                    style={{width: '100%', marginTop: '4px'}}
                    size='middle'
                    // placeholder='Search to Select'
                    optionFilterProp='children'
                    filterOption={(input, option) =>
                      (option!.children as unknown as string).includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA!.children as unknown as string)
                        .toLowerCase()
                        .localeCompare(
                          (optionB!.children as unknown as string).toLowerCase()
                        )
                    }
                  >
                    <Select.Option value='1'>Not Identified</Select.Option>
                    <Select.Option value='2'>Closed</Select.Option>
                    <Select.Option value='3'>Communicated</Select.Option>
                    <Select.Option value='4'>Identified</Select.Option>
                    <Select.Option value='5'>Resolved</Select.Option>
                    <Select.Option value='6'>Cancelled</Select.Option>
                  </Select>
                </Col>
              </Row>
              <br />
              <Row style={{borderTop: '1px solid #E1E1E1'}}></Row>
              <br />
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <BBtn
                  title='Back'
                  color='#FF5C6A'
                  onClick={() => setDataOrg(undefined)}
                />
                <BBtn title='Save Changes' color='#24BB69' />
              </div>
            </div>
          </Col>
        )}

        {dataOrg && (
          <Col span={dataOrgUser ? 16 : 24} className='gutter-row'>
            <p className='org_title'>Org Users</p>
            <div className='org_div1'>
              <ITable
                onClickRow={(params: any) => setDataOrgUser(params)}
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
        )}
        {dataOrgUser && (
          <Col span={8} className='gutter-row' style={{marginTop: '3.2rem'}}>
            <div className='org_div1'>
              <p className='org_p1'>사용자 추가</p>
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
                    required={true}
                    title='Last Name'
                    name='lastName'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Phone Number'
                    name='phoneNumber'
                    onChange={() => console.log(111)}
                  />
                </Col>

                <Col span={12}>
                  <InputGroup
                    title='Role'
                    name='role'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Phone Number'
                    name='phoneNumber'
                    onChange={() => console.log(111)}
                  />
                </Col>
                <Col span={12}>
                  <InputGroup
                    title='Role'
                    name='role'
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
                  onClick={() => setDataOrgUser(undefined)}
                />
                <BBtn title='Save Changes' color='#24BB69' />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default Org
