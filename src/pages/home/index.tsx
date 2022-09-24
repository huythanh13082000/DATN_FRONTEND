import React from 'react'
import {Breadcrumb, Col, Layout, Row} from 'antd'
import DashboardLayout from '../../components/layout/DashboardLayout'
import ISearch from '../../components/search'
import InforBoxHomePage from '../../components/inforBoxHomePage'
import './home.css'
import { useTranslation } from 'react-i18next'
const {Header, Content, Footer, Sider} = Layout

const Home = () => {
  const {t} = useTranslation()
  return (
    <div>
      <ISearch onChange={() => console.log(222)} />
      <Row
        justify='space-between'
        className='home_row1'
        wrap={true}
        gutter={24}
      >
        <Col span={6}>
          <InforBoxHomePage
            type={1}
            title={t('inforBoxHomePage.riders')}
            icon={<i className='fa-solid fa-head-side-mask'></i>}
          />
        </Col>
        <Col span={6}>
          <InforBoxHomePage
            type={2}
            title={t('inforBoxHomePage.rides')}
            icon={<i className='fa-solid fa-person-biking'></i>}
          />
        </Col>
        <Col span={6}>
          <InforBoxHomePage
            type={1}
            title={t('inforBoxHomePage.vehicles')} 
            icon={<i className='fa-solid fa-motorcycle'></i>}
          />
        </Col>
        <Col span={6}>
          <InforBoxHomePage
            type={1}
            title= {t('inforBoxHomePage.tickets')}
            icon={<i className='fa-solid fa-ticket'></i>}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home
