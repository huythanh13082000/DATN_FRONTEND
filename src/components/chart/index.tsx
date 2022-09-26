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
