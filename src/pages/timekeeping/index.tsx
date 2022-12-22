import {Button, message, Popconfirm, Row} from 'antd'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './home.css'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
import {FILE, LOCAL_STORAGE} from '../../utils/constants'
import { useAppDispatch } from '../../app/hooks'
import { authActions } from '../../feature/auth/authSlice'

const Timekeeping = () => {
  const [personnel, setPersonnel] = useState<any>()
  const [listTimeSheet, setListTimeSheet] = useState<any>()
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getPersonnel = async () => {
      // console.log(123231123)
      try {
        const data = await axios.get(
          `http://localhost:8080/api/personnelsEmail/${localStorage.getItem(
            'email'
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        )
        console.log(444, data)
        setPersonnel(data.data.data)
      } catch (error: any) {
        console.log(345, error)
        if (error.response.status === 404 || error.response.status === 401) {
          navigate('/login')
        }
      }
    }

    getPersonnel()
  }, [navigate])

  useEffect(() => {
    const getPersonnel = async () => {
      try {
        console.log(123231123)
        const data = await axios.get(
          `http://localhost:8080/api/timeSheets/personnels`,
          // {
          //   personnel: personnel._id,
          // },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            params: {
              personnel: personnel._id,
            },
          }
        )
        console.log(5555, data)
        setListTimeSheet(data.data.data)
      } catch (error: any) {
        console.log(345, error)
        if (error.response.status === 404 || error.response.status === 401) {
          navigate('/login')
        }
      }
    }
    personnel && getPersonnel()
  }, [personnel, load, navigate])
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showPopconfirm = () => {
    setOpen(true)
  }

  const handleOk = async () => {
    setConfirmLoading(true)
    try {
      const data = await axios.post(
        `http://localhost:8080/api/timeSheets`,
        {
          personnel: personnel._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )
      // console.log(3333, data)
      message.success(
        `${data.data.description} vào lúc ${moment(data.data.time).format(
          'h:mm:ss'
        )}`
      )
      setLoad(!load)
      setOpen(false)
      setConfirmLoading(false)
    } catch (error) {
      console.log(333, error)
      message.error('Chấm công thất bại!')
    }
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }
  const timekeepingStart = async () => {
    try {
      const data = await axios.post(
        `http://localhost:8080/api/timeSheets`,
        {
          personnel: personnel._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )
      message.success(`${data.data.description}`)
      setLoad(!load)
    } catch (error) {
      console.log(333, error)
      message.error('Chấm công thất bại!')
    }
  }
  console.log(444, personnel)
  return (
    <>
      {personnel && listTimeSheet ? (
        <div
          style={{
            padding: '2rem 0',
            backgroundImage: `url("/img/background.jpg")`,
            maxWidth: '502px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '5vh',
            }}
          >
            <div
              style={{
                backgroundColor: '#33adff',
                width: '80%',
                borderRadius: '5px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              }}
            >
              <div style={{padding: '1rem 0'}}>
                <p className='home-p'>
                  <img
                    src={`${FILE}${personnel && personnel.avatar}`}
                    alt='avatar'
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      margin: '1rem 0',
                    }}
                  />
                </p>
                <p className='home-p1'>{personnel && personnel.name}</p>
                <p className='home-p1'>{personnel && personnel.email}</p>
                <p
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '30px',
                    margin: 0,
                  }}
                >
                  <i
                    className='fa-solid fa-right-from-bracket'
                    onClick={() => {
                      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
                      dispatch(authActions.setLoginStatus(false))
                      dispatch(authActions.setUser(undefined))
                      navigate('/login')
                    }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '6vh',
              position: 'relative',
            }}
          >
            <img
              src='/img/button.png'
              alt=''
              style={{
                width: '250px',
                height: '250px',
                cursor: 'pointer',
              }}
            />
            <Popconfirm
              title='Xác nhận chấm công !'
              open={open}
              onConfirm={handleOk}
              okButtonProps={{loading: confirmLoading}}
              onCancel={handleCancel}
              placement='top'
            >
              <span
                onClick={() => {
                  showPopconfirm()
                }}
                style={{position: 'absolute', top: '6rem', cursor: 'pointer'}}
              >
                Chấm công
              </span>
            </Popconfirm>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '80%',
                backgroundColor: '#33adff',
                height: '20vh',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                borderRadius: '5px',
              }}
            >
              <p className='home-p1'>
                Lịch sử chấm công ngày: {moment().format('DD/MM/YYYY')}
              </p>
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#33adff',
                  overflow: 'auto',
                }}
              >
                {listTimeSheet &&
                  listTimeSheet.map((item: any, index: any) => {
                    return (
                      <p className='home-p2'>
                        {index + 1}.{' '}
                        {moment(item.createdAt).format('DD/MM/YYYY h:mm:ss a')}
                      </p>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>...loading</>
      )}
    </>
  )
}

export default Timekeeping
