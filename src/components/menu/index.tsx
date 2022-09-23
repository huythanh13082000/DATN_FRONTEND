import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import type {MenuProps} from 'antd'
import {Button, Menu} from 'antd'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import './menu.css'

type MenuItem = Required<MenuProps>['items'][number]

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
  } as MenuItem
}

const MenuHome: React.FC = () => {
  const {t} = useTranslation()

  const items: MenuItem[] = [
    getItem(t('Analytics'), '1', <i className='fa-solid fa-house'></i>),
    getItem('Orgs', 'sub1', <i className='fa-solid fa-people-group'></i>, [
      getItem('Org', '8', <i className='fa-solid fa-sitemap'></i>),
      getItem('Role List', '9', <i className='fa-solid fa-circle-user'></i>),
      getItem('Permissions', '10', <i className='fa-solid fa-key'></i>),
    ]),
    getItem('Maps', '2', <i className='fa-solid fa-location-dot'></i>),
    getItem('Fleets', 'sub2', <i className='fa-solid fa-map-location-dot'></i>),
    getItem('Vehicles', 'sub3', <i className='fa-solid fa-motorcycle'></i>, [
      getItem('All', '11'),
      getItem('Reserved', '12'),
      getItem('Vehicle History', '13'),
    ]),
    getItem('Geofence', '3', <i className='fa-brands fa-product-hunt'></i>, [
      getItem('Parking Zones', '14'),
      getItem('Restricted Zones', '15'),
      getItem('Service Areas', '16'),
      getItem('Slow Speed Zones', '17'),
      getItem('Stations', '18'),
    ]),
    getItem('Riders', '19', <i className='fa-solid fa-person-biking'></i>),
    getItem('Rides', 'sub4', <i className='fa-solid fa-person-biking'></i>),
    getItem('Payments', '4', <i className='fa-solid fa-credit-card'></i>),
    getItem(
      'Pricing',
      'sub5',
      <i className='fa-solid fa-circle-dollar-to-slot'></i>,
      [
        getItem('Payment Gateway', '20'),
        getItem('Billing Plan', '21'),
        getItem('Tax', '22'),
        getItem('Promos', '23'),
        getItem('Offer', '24'),
      ]
    ),
    getItem('Support', 'sub6', <i className='fa-solid fa-headset'></i>, [
      getItem('Tickets', '25'),
      getItem('Feedback Option', '26'),
    ]),
    getItem('Campaigns', 'sub7', <i className='fa-solid fa-bullhorn'></i>, [
      getItem('Notifications', '27'),
      getItem('Banner', '28'),
    ]),
    getItem('Application Theme', '5', <i className='fa-solid fa-palette'></i>),
    getItem('Events', '6', <i className='fa-solid fa-calendar'></i>),
    getItem('Settings', '7', <i className='fa-solid fa-gear'></i>),
  ]

  return (
    <Menu
      style={{color: '#758D96'}}
      defaultSelectedKeys={['1']}
      mode='inline'
      theme='light'
      // inlineCollapsed={collapsed}
      items={items}
      // title='logo'
    />
  )
}

export default MenuHome
