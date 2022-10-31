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
        switch (key) {
          case '1':
            navigate(Url.home)
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
    getItem('DL tính lương', '4', <i className='fa-solid fa-database'></i>, [
      getItem('Chấm công', '4_1'),
      getItem('Doanh số', '4_2'),
      getItem('KPI', '4_3'),
      getItem('Sản phẩm', '4_4'),
      getItem('Thu nhập khác', '4_5'),
      getItem('Khấu trừ khác', '4_6'),
    ]),

    //Tính lương
    getItem('Tính lương', '5', <i className='fa-solid fa-calculator'></i>, [
      getItem('Bảng lương', '5_1'),
      getItem('Tạm ứng', '5_2'),
      getItem('Tổng hợp lương', '5_3'),
      getItem('Bảng phân bổ lương', '5_4'),
      getItem('Ngân sách lương', '5_5'),
      getItem('Bảng thuế', '5_6'),
      getItem('Quyết toán thuế', '5_7'),
    ]),
    getItem(
      'Chi trả lương',
      '6',
      <i className='fa-solid fa-money-bill-wave'></i>,
      [getItem('Bảng chi trả', '6_1'), getItem('Tổng hợp chi trả', '6_2')]
    ),
    getItem('Báo cáo', '7', <i className='fa-solid fa-bug'></i>, [
      getItem('THTN nhân viên', '7_1'),
      getItem('TKTN theo tháng', '7_2'),
      getItem('PTCC thu nhập', '7_3'),
      getItem('TH chi phí lương', '7_4'),
      getItem('LS lương nhân viên', '7_5'),
      getItem('Tổng hợp công nợ', '7_6'),
      getItem('Ngân sách lương', '7_7'),
    ]),
    getItem('Thiết lập', '8', <i className='fa-solid fa-gear'></i>, [
      getItem('Nhân viên', '8_1'),
      getItem('Thông số mặc định', '8_2'),
      getItem('Biểu mẫu', '8_3'),
      getItem('Tùy chỉnh', '8_4'),
      getItem('Vai trò', '8_5'),
      getItem('Người dùng', '8_6'),
      getItem('Kết nối', '8_7'),
      getItem('Hệ thống', '8_8'),
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
