import React, {ReactNode} from 'react'
import './inforBoxHomePage.css'
import {RightCircleOutlined} from '@ant-design/icons'
import {Col, Row} from 'antd'
import { useTranslation } from 'react-i18next'

const InforBoxHomePage = (props: {
  icon: ReactNode
  title: string
  data?: any
  type: number
}) => {
  return (
    <div className='ibhp_container' >
      <div className='ibhp_div1'>
        <span className='ibhp_span1'>{props.icon}</span>
        <span className='ibhp_span2'>{props.title}</span>
        <RightCircleOutlined className='ibhp_icon1' />
      </div>
      {props.type === 1 ? (
        <Row
          justify='center'
          align='middle'
          style={{height: '90px'}}
          className='ibhp_row1'
        >
          <div className='ibhp_div2'>
            <p className='ibhp_p1'>51</p>
            <p className='ibhp_p2'>Monthly Active Users</p>
          </div>
        </Row>
      ) : (
        <Row style={{height: '90px'}} className='ibhp_row1'>
          <Col span={12} className='ibhp_col1'>
            <p className='ibhp_p1' style={{marginTop: 0}}>
              9,236
            </p>
            <p className='ibhp_p2' style={{marginTop: 0}}>
              9,236 Active Users
            </p>
          </Col>
          <Col span={12} className='ibhp_col2' style={{marginTop: 0}}>
            <p className='ibhp_p1' style={{marginTop: 0}}>
              9,236
            </p>
            <p className='ibhp_p2' style={{marginTop: 0}}>
              9,236 Active Users
            </p>
          </Col>
        </Row>
      )}
      <Row>
        <Col span={12} className='ibhp_col1'>
          <p className='ibhp_p1'>9,236</p>
          <p className='ibhp_p2'>9,236 Active Users</p>
        </Col>
        <Col span={12} className='ibhp_col2'>
          <p className='ibhp_p1'>9,236</p>
          <p className='ibhp_p2'>9,236 Active Users</p>
        </Col>
      </Row>
    </div>
  )
}

export default InforBoxHomePage
