import React, {useEffect} from 'react'
import {Col, Row} from 'antd'
import './home.css'
import {useTranslation} from 'react-i18next'
import {ChartCustom} from '../../components/chart'
import axiosClient from '../../apis/axiosClient'
import axios, {AxiosRequestConfig} from 'axios'

const Home = () => {
  const {t} = useTranslation()
  useEffect(() => {
    const b = async () => {
      // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
      const headers = {'Content-Type': 'blob'}
      const config: AxiosRequestConfig = {
        method: 'GET',
        url: 'http://localhost:4200/api',
        responseType: 'arraybuffer',
        headers,
      }

      try {
        const response = await axios(config)

        const outputFilename = `${Date.now()}.xls`

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', outputFilename)
        document.body.appendChild(link)
        link.click()

        // OR you can save/write file locally.
        // fs.writeFileSync(outputFilename, response.data)
      } catch (error) {
        console.log(error)
      }
    }
    b()
  }, [])

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
