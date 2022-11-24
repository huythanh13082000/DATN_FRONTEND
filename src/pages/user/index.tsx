import {message} from 'antd'
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {urlApi} from '../../apis/url'
import {useAppSelector} from '../../app/hooks'
import TableCustom from '../../components/tableCustom'
import {selectUser} from '../../feature/auth/authSlice'
import {columnsUser} from '../../utils/columnTable'

const User = () => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate(-1)
    }
  }, [user, navigate])

  return (
    <div>
      <TableCustom columns={columnsUser} url={urlApi.user} />
    </div>
  )
}

export default User
