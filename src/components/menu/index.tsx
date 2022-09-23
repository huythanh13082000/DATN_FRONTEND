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
  const items: MenuItem[] = [
    getItem(
      <img
        style={{height: '37px'}}
        src='	https://campusride-dashboard.joyridecity.bike/logo/testing.svg'
        alt=''
      />,
      'menu memu',
      <>
        <i
          style={{fontSize: '20px', marginRight: '5rem'}}
          className='fa-solid fa-bars'
          onClick={() => toggleCollapsed()}
        ></i>
      </>
    ),
    getItem('Analytics', '1', <i className='fa-solid fa-house'></i>),
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
    getItem(
      'Events',
      '6',
      <svg
        viewBox='-21 -50 682.66669 682'
        width='20px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='m640 483.800781v-485.382812h-640v485.382812h247.328125l-14.65625 60.105469h-35.664063v37.5h245.992188v-37.5h-35.671875l-14.652344-60.105469zm-110-37.5v-52.882812h72.5v52.882812zm72.5-410.382812v320h-565v-320zm-565 357.5h455v52.882812h-455zm331.230469 150.480469h-97.460938l14.660157-60.097657h68.140624zm0 0'></path>
        <path d='m214.394531 233.988281h-67.007812v-112.375h-40.574219v147.75h107.582031zm0 0'></path>
        <path d='m228.546875 121.613281h40.574219v147.75h-40.574219zm0 0'></path>
        <path d='m368.796875 269.363281 54.3125-147.75h-42.660156l-28.503907 96.769531-28.929687-96.769531h-42.867187l54.9375 147.75zm0 0'></path>
        <path d='m539.644531 233.988281h-64.71875v-23.304687h53.6875v-32.882813h-53.6875v-20.808593h62.847657v-35.378907h-103.421876v147.75h105.292969zm0 0'></path>
      </svg>
    ),
    getItem('Settings', '7', <i className='fa-solid fa-gear'></i>),
  ]

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{width: 256}}>
      <Menu
        style={{height: '100vh'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='light'
        inlineCollapsed={collapsed}
        items={items}
        title='logo'
      />
    </div>
  )
}

export default MenuHome
