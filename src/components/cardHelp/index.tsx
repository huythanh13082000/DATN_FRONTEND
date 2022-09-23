import {Col, Row} from 'antd'
import React from 'react'
import Images from '../../assets/gen'
import './cardHelp.css'

const CardHelp = () => {
  return (
    <div className='ch_container'>
      <p className='ch_title'>Help Center</p>
      <Row className='ch-row1'>
        <Col span={4}>
          <img src={Images.helpImg1} alt='' />
        </Col>
        <Col>
          <p className='ch_p1'>Knowledge Base</p>
          <p className='ch_p2'>
            Comprehensive guide on using the joyride platform
          </p>
        </Col>
      </Row>
      <Row className='ch-row1'>
        <Col span={4}>
          <img src={Images.helpImg2} alt='' />
        </Col>
        <Col>
          <p className='ch_p1'>Knowledge Base</p>
          <p className='ch_p2'>
            Comprehensive guide on using the joyride platform
          </p>
        </Col>
      </Row>
      <Row className='ch-row1'>
        <Col span={4}>
          <img src={Images.helpImg3} alt='' />
        </Col>
        <Col>
          <p className='ch_p1'>Knowledge Base</p>
          <p className='ch_p2'>
            Comprehensive guide on using the joyride platform
          </p>
        </Col>
      </Row>
      <Row className='ch-row1'>
        <Col span={4}>
          <img src={Images.helpImg4} alt='' />
        </Col>
        <Col>
          <p className='ch_p1'>Knowledge Base</p>
          <p className='ch_p2'>
            Comprehensive guide on using the joyride platform
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default CardHelp
