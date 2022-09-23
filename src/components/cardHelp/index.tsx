import {Col, Row} from 'antd'
import React from 'react'
import './cardHelp.css'

const CardHelp = () => {
  return (
    <div className='ch_container'>
      <p>Help Center</p>
      <Row>
        <Col span={6}>
          <img src='' alt='' />
        </Col>
        <Col>
          <p>Knowledge Base</p>
          <p>Comprehensive guide on using the joyride platform</p>
        </Col>
      </Row>
    </div>
  )
}

export default CardHelp
