import React, {useEffect, useState} from 'react'
import {Col, Row} from 'antd'
import './home.css'
import {useTranslation} from 'react-i18next'
import {ChartCustom} from '../../components/chart'
import axios, {AxiosRequestConfig} from 'axios'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {
  personnelAction,
  selectListPersonnel,
} from '../../feature/personnel/personnelSlice'
import moment from 'moment'
import axiosClient from '../../apis/axiosClient'
import {urlApi} from '../../apis/url'

const Home = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const listPersonnel = useAppSelector(selectListPersonnel)
  const [personnel, setPersonnel] = useState<{on: number; off: number}>()
  const [rank, setRank] = useState<{data: number[]; columns: string[]}>()
  const [salary, setSalary] = useState<{data: number[]; columns: string[]}>()

  useEffect(() => {
    const getSalary = async () => {
      const dataSalary: {data: {data: {name: string; salary: number}[]}} =
        await axiosClient.getService(urlApi.salary)
      console.log(444, dataSalary)
      const columns = dataSalary.data.data.map((item) => {
        return item.name
      })
      const data = dataSalary.data.data.map((item) => {
        return item.salary
      })
      setSalary({data, columns})
    }
    getSalary()
  }, [])
  // useEffect(() => {
  //   const b = async () => {
  //     // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
  //     const headers = {'Content-Type': 'blob'}
  //     const config: AxiosRequestConfig = {
  //       method: 'GET',
  //       url: 'http://localhost:4200/api',
  //       responseType: 'arraybuffer',
  //       headers,
  //     }

  //     try {
  //       const response = await axios(config)

  //       const outputFilename = `${Date.now()}.xls`

  //       // If you want to download file automatically using link attribute.
  //       const url = URL.createObjectURL(new Blob([response.data]))
  //       const link = document.createElement('a')
  //       link.href = url
  //       link.setAttribute('download', outputFilename)
  //       document.body.appendChild(link)
  //       link.click()

  //       // OR you can save/write file locally.
  //       // fs.writeFileSync(outputFilename, response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   b()
  // }, [])
  useEffect(() => {
    dispatch(personnelAction.getListPersonnel())
  }, [dispatch])
  console.log(9999, listPersonnel)

  useEffect(() => {
    setPersonnel({
      on: listPersonnel.filter((item) => item.status === true).length,
      off: listPersonnel.filter((item) => item.status === false).length,
    })
    const dataRank = listPersonnel.map((item) => {
      return item.rank.name
    })
    const columns: string[] = []
    const data: number[] = []
    dataRank.forEach((item) => {
      if (!columns.includes(item)) {
        columns.push(item)
      }
    })
    columns.forEach((item) => {
      data.push(dataRank.filter((item1) => item1 === item).length)
    })
    setRank({columns, data})
  }, [listPersonnel])
  console.log(8888, personnel)

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
        {salary && (
          <Col span={16}>
            <ChartCustom
              labels={salary?.columns}
              datasets={[
                {
                  label: 'Lương',
                  data: salary?.data,
                  backgroundColor: '#758D96',
                },
              ]}
              title={`Bảng lương tháng ${moment().month() + 1}`}
              type='Bar'
              height='70vh'
            />
          </Col>
        )}
        {personnel?.off && personnel.on && rank?.columns && rank.data && salary&&(
          <Col span={8}>
            <ChartCustom
              labels={['Đang làm việc', 'Đã nghỉ việc']}
              datasets={[
                {
                  label: '# of Votes',
                  data: [Number(personnel?.on), Number(personnel?.off)],
                  backgroundColor: [
                    '#3980B5',
                    // '#3980B5',
                    '#95BBD7',
                    // '#679DC6',
                    // '#0B62A4',
                  ],
                  borderColor: [
                    'white',
                    'white',
                    // , 'white', 'white', 'white'
                  ],
                  borderWidth: 2,
                },
              ]}
              height='35vh'
              title='Biểu đồ nhân viên'
              type='Doughnut'
            />

            <ChartCustom
              labels={rank?.columns}
              datasets={[
                {
                  label: '# of Votes',
                  data: rank.data,
                  backgroundColor: ['#3980B5', '#95BBD7', '#679DC6', '#0B62A4'],
                  borderColor: ['white', 'white', 'white', 'white', 'white'],
                  borderWidth: 2,
                },
              ]}
              title='Biểu đồ chức vụ'
              type='Doughnut'
              height='35vh'
            />
          </Col>
        )}
        {/* <Col span={12}>
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
        </Col> */}
      </Row>
      {/* <br></br>
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
      </Row> */}
      <br></br>
      <br></br>

      {/* <Col span={8}>
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
        </Col> */}
    </div>
  )
}

export default Home
