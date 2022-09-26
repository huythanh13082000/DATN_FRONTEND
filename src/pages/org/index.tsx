import {Col, Row, Select} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import {Option} from 'antd/lib/mentions'
import React from 'react'
import BBtn from '../../components/button'
import ITable from '../../components/table'
import InputGroup from '../../components/textInput'
import './org.css'

const Org = () => {
  return (
    <div>
      <br />
      <p className='org_title'>Org</p>
      <Row gutter={24}>
        <Col span={12} className='gutter-row'>
          <div className='org_div1'>
            <ITable
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
        <Col span={12} className='gutter-row'>
          <div className='org_div1'>
            <p className='org_p1'>편집 Org</p>
            <Row gutter={16}>
              <Col span={12}>
                <InputGroup
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
                  <Option value='1'>Not Identified</Option>
                  <Option value='2'>Closed</Option>
                  <Option value='3'>Communicated</Option>
                  <Option value='4'>Identified</Option>
                  <Option value='5'>Resolved</Option>
                  <Option value='6'>Cancelled</Option>
                </Select>
              </Col>
              <Col span={12}>
                <InputGroup
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
                <InputGroup
                  title='Alias'
                  name='alias'
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
                  <Option value='1'>Not Identified</Option>
                  <Option value='2'>Closed</Option>
                  <Option value='3'>Communicated</Option>
                  <Option value='4'>Identified</Option>
                  <Option value='5'>Resolved</Option>
                  <Option value='6'>Cancelled</Option>
                </Select>
              </Col>
            </Row>
            <Row style={{borderTop: '1px solid #E1E1E1'}}></Row>
            <br />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <BBtn title='Back' color='#FF5C6A' />
              <BBtn title='Save Changes' color='#24BB69' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Org
