import {MenuProps, message} from 'antd'
import {Button, Menu} from 'antd'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useLocation, useNavigate} from 'react-router-dom'
import {useAppSelector} from '../../app/hooks'
import {selectUser} from '../../feature/auth/authSlice'
import {Url} from '../../routers/paths'
import './menu.css'

type MenuItem = Required<MenuProps>['items'][number]

const MenuHome: React.FC = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>()
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>()
  const location = useLocation()
  const user = useAppSelector(selectUser)

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick: () => {
        switch (key) {
          case '1':
            navigate(Url.home)
            break
          case '8_1':
            navigate(Url.personnel)
            break
          case '8_9':
            navigate(Url.department)
            break
          case '8_10':
            navigate(Url.rank)
            break
          case '8_11':
            navigate(Url.user)
            break
          case '4_1':
            navigate(Url.timeSheet)
            break
          case '4_7':
            navigate(Url.allowance)
            break
          case '4_8':
            navigate(Url.bonus)
            break
          case '4_9':
            navigate(Url.fine)
            break
          case '5_8':
            navigate(Url.timeSheetTable)
            break
          case '5_1':
            navigate(Url.salalyTable)
            break
          case '6':
            navigate(Url.personnelDayOff)
            break
          default:
            break
        }
      },
      style: {color: '#758D96'},
    } as MenuItem
  }
  // useEffect(()=>{
  //   navigate('/home')
  // },[navigate])

  const items: MenuItem[] = [
    //tong quan
    getItem('Tổng quan', '1', <i className='fa-solid fa-house'></i>),
    //thanh phan luong
    // getItem('TP lương', '2', <i className='fa-brands fa-elementor'></i>),
    //mẫu bảng lương
    // getItem('Mẫu bảng lương', '3', <i className='fa-solid fa-table'></i>),
    //Dữ liệu tính lương
    getItem('DL tính lương', '4', <i className='fa-solid fa-database'></i>, [
      getItem('Chấm công', '4_1'),
      getItem('Tiền trợ cấp', '4_7'),
      getItem('Tiền thưởng', '4_8'),
      getItem('Tiền phạt', '4_9'),
      // getItem('Doanh số', '4_2'),
      // getItem('KPI', '4_3'),
      // getItem('Sản phẩm', '4_4'),
      // getItem('Thu nhập khác', '4_5'),
      // getItem('Khấu trừ khác', '4_6'),
    ]),

    //Tính lương
    getItem('Tính lương', '5', <i className='fa-solid fa-calculator'></i>, [
      getItem('Bảng chấm công', '5_8'),
      getItem('Bảng lương', '5_1'),
      // getItem('Tạm ứng', '5_2'),
      // getItem('Tổng hợp lương', '5_3'),
      // getItem('Bảng phân bổ lương', '5_4'),
      // getItem('Ngân sách lương', '5_5'),
      // getItem('Bảng thuế', '5_6'),
      // getItem('Quyết toán thuế', '5_7'),
    ]),
    getItem('Nghỉ phép', '6', <i className="fa-solid fa-calendar-days"></i>),
    // getItem('Báo cáo', '7', <i className='fa-solid fa-bug'></i>, [
    //   getItem('THTN nhân viên', '7_1'),
    //   getItem('TKTN theo tháng', '7_2'),
    //   getItem('PTCC thu nhập', '7_3'),
    //   getItem('TH chi phí lương', '7_4'),
    //   getItem('LS lương nhân viên', '7_5'),
    //   getItem('Tổng hợp công nợ', '7_6'),
    //   getItem('Ngân sách lương', '7_7'),
    // ]),
    getItem('Thiết lập', '8', <i className='fa-solid fa-gear'></i>, [
      getItem('Nhân viên', '8_1'),
      getItem('Phòng ban', '8_9'),
      getItem('Chức vụ', '8_10'),
      getItem('Tài khoản', '8_11'),
      // getItem('Thông số mặc định', '8_2'),
      // getItem('Biểu mẫu', '8_3'),
      // getItem('Tùy chỉnh', '8_4'),
      // getItem('Vai trò', '8_5'),
      // getItem('Người dùng', '8_6'),
      // getItem('Kết nối', '8_7'),
      // getItem('Hệ thống', '8_8'),
    ]),
    getItem('Thông báo', '9', <i className="fa-solid fa-bell"></i>),
  ]

  return (
    <Menu
      style={{
        color: '#758D96',
      }}
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['4']}
      mode='inline'
      theme='light'
      items={items}
    />
  )
}

export default MenuHome
