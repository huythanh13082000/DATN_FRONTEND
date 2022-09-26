import type {MenuProps} from 'antd'
import {Button, Menu} from 'antd'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Url} from '../../routers/paths'
import './menu.css'

type MenuItem = Required<MenuProps>['items'][number]

const MenuHome: React.FC = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()

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
        console.log('key', key)

        switch (key) {
          case '1':
            console.log('key', key)
            navigate(Url.home)
            break
          case '8':
            console.log('key', key)
            navigate(Url.org)
            break
          case '2':
            navigate(Url.map)
            break
          case '7':
            navigate(Url.setting)
            break
          case '9':
            navigate(Url.role)
            break
          case '10':
            navigate(Url.permission)
            break
          case 'sub2':
            navigate(Url.fleets)
            break

          default:
            break
        }
      },
      style: {color: '#758D96'},
    } as MenuItem
  }

  const items: MenuItem[] = [
    //tong quan
    getItem('Tổng quan', '1', <i className='fa-solid fa-house'></i>),
    //thanh phan luong
    getItem('TP lương', '2', <i className='fa-brands fa-elementor'></i>),
    //mẫu bảng lương
    getItem('Mẫu bảng lương', '3', <i className='fa-solid fa-table'></i>),
    //Dữ liệu tính lương
    getItem('DL tính lương', 'sub3', <i className='fa-solid fa-database'></i>, [
      getItem('Chấm công', '11'),
      getItem('Doanh số', '12'),
      getItem('KPI', '13'),
      getItem('Sản phẩm', '12'),
      getItem('Thu nhập khác', '13'),
      getItem('Khấu trừ khác', '13'),
    ]),

    //Tính lương
    getItem('Tính lương', '3', <i className='fa-solid fa-calculator'></i>, [
      getItem('Bảng lương', '14'),
      getItem('Tạm ứng', '15'),
      getItem('Bảng tổng hợp lương', '16'),
      getItem('Bảng phân bổ lương', '17'),
      getItem('Ngân sách lương', '18'),
      getItem('Bảng thuế', '18'),
      getItem('Bảng quyết toán thuế', '18'),
    ]),
    getItem(
      'Chi trả lương',
      'sub3',
      <i className='fa-solid fa-money-bill-wave'></i>,
      [getItem('Bảng chi trả', '11'), getItem('Tổng hợp chi trả', '12')]
    ),
    getItem('Báo cáo', 'sub4', <i className='fa-solid fa-bug'></i>, [
      getItem('Tổng hợp thu nhập nhân viên', '29'),
      getItem('Thống kê thu nhập theo tháng', '30'),
      getItem('Phân tích cơ cấu thu nhập', '30'),
      getItem('Tổng hợp chi phí lương', '29'),
      getItem('Lịch sử lương của nhân viên', '30'),
      getItem('Tổng hợp công nợ', '30'),
      getItem('Tình hình thực hiện ngân sách lương', '30'),
    ]),
  ]

  return (
    <Menu
      style={{
        color: '#758D96',
      }}
      defaultSelectedKeys={['1']}
      mode='inline'
      theme='light'
      items={items}
    />
  )
}

export default MenuHome
