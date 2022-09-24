import React from 'react'
import {Col, Row} from 'antd'
import InforBoxHomePage from '../../components/inforBoxHomePage'
import './home.css'
import {useTranslation} from 'react-i18next'
import {ChartCustom} from '../../components/chart'

const Home = () => {
  const {t} = useTranslation()

  return (
    <div>
      <br></br>
      <br></br>
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
            title={t('inforBoxHomePage.tickets')}
            icon={<i className='fa-solid fa-ticket'></i>}
          />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row
        justify='space-between'
        className='home_row1'
        wrap={true}
        gutter={24}
      >
        <Col span={12}>
          <ChartCustom
            labels={[
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
            ]}
            datasets={[
              {
                label: 'Rides',
                data: [
                  333, 333, 444, 55, 44, 55, 543, 333, 333, 444, 55, 44, 55,
                  543, 333, 333, 444, 55, 44, 55, 543, 333, 333, 444,
                ],
                backgroundColor: '#758D96',
              },
            ]}
            title='Rides Per Hour'
            type='Bar'
          />
        </Col>
        <Col span={12}>
          <ChartCustom
            labels={[
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
            ]}
            datasets={[
              {
                label: 'Total User',
                data: [
                  33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85,
                ],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: '#758D96',
              },
            ]}
            type='Line'
            title='User Signups'
          />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row justify='space-between' className='home_row1' wrap={true}>
        <Col span={24}>
          <ChartCustom
            labels={[
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
              '2022-06-07',
              '2022-06-09',
              '2022-06-011',
              '2022-06-013',
              '2022-06-15',
            ]}
            datasets={[
              {
                label: 'Total User',
                data: [
                  33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85,
                ],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: '#758D96',
              },
            ]}
            type='Line'
            title='Rides:971'
          />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row gutter={24}>
        <Col span={8}>
          <ChartCustom
            labels={['item1', 'item2', 'item3', 'item4', 'item5', 'item6']}
            datasets={[
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#3980B5',
                  '#3980B5',
                  '#95BBD7',
                  '#679DC6',
                  '#0B62A4',
                ],
                borderColor: ['white', 'white', 'white', 'white', 'white'],
                borderWidth: 2,
              },
            ]}
            title='Fleet Productivity'
            type='Doughnut'
          />
        </Col>
        <Col span={8}>
          <ChartCustom
            labels={['item1', 'item2', 'item3', 'item4', 'item5', 'item6']}
            datasets={[
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#3980B5',
                  '#3980B5',
                  '#95BBD7',
                  '#679DC6',
                  '#0B62A4',
                ],
                borderColor: ['white', 'white', 'white', 'white', 'white'],
                borderWidth: 2,
              },
            ]}
            title='Fleet Heath'
            type='Doughnut'
          />
        </Col>
        <Col span={8}>
          <ChartCustom
            labels={['item1', 'item2', 'item3', 'item4', 'item5', 'item6']}
            datasets={[
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#3980B5',
                  '#3980B5',
                  '#95BBD7',
                  '#679DC6',
                  '#0B62A4',
                ],
                borderColor: ['white', 'white', 'white', 'white', 'white'],
                borderWidth: 2,
              },
            ]}
            title='Vehicle Connectivity'
            type='Doughnut'
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home
