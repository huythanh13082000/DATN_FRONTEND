import React, {useEffect, useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import './chart.css'
import {DataSetChart} from '../../models/dataSetsChart'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

export const dataLine = {
  labels: [
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
  ],
  datasets: [
    {
      label: 'Total User',
      data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65, 33, 53, 85],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#758D96',
    },
  ],
}
export const dataDoughnut = {
  labels: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#3980B5', '#3980B5', '#95BBD7', '#679DC6', '#0B62A4'],
      borderColor: ['white', 'white', 'white', 'white', 'white'],
      borderWidth: 2,
    },
  ],
}

export function ChartCustom(props: {
  title?: string
  type: 'Bar' | 'Line' | 'Doughnut'
  labels: string[]
  datasets: DataSetChart[]
}) {
  const [data, setData] = useState<{
    labels: string[]
    datasets: DataSetChart[]
  }>()
  useEffect(() => {
    setData({
      labels: props.labels,
      datasets: [...props.datasets],
    })
  }, [props])
  return (
    <>
      {data && (
        <div
          style={{
            background: '#FFFFFF',
            padding: '1rem',
            borderRadius: '5px',
            height: '309px',
          }}
        >
          <p className='bc_p1'>{props.title}</p>
          {props.type === 'Bar' && <Bar options={options} data={data} />}
          {props.type === 'Line' && <Line options={options} data={data} />}
          {props.type === 'Doughnut' && (
            <Doughnut data={data} options={options} />
          )}
        </div>
      )}
    </>
  )
}
