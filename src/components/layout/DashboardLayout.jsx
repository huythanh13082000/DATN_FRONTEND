import React, { useState } from 'react';
import { Breadcrumb, Layout } from 'antd'
import MenuHome from '../menu'
const { Header, Content, Footer, Sider } = Layout

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <p>
        <h3>{t('Thanks.1')}</h3> <h3>{t('Why.1')}</h3>{' '}
      </p> */}
      <Sider
        style={{ backgroundColor: 'white' }}
        collapsible={false}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo'>
          <p className='app-p1'>
            <i
              className='fa-solid fa-bars'
              style={{ paddingLeft: collapsed ? '0.35rem' : 0 }}
              onClick={() => setCollapsed(!collapsed)}
            ></i>
            {!collapsed && (
              <img
                src='https://campusride-dashboard.joyridecity.bike/logo/testing.svg'
                alt=''
              />
            )}
          </p>
        </div>
        <MenuHome />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }} />
        {children}
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
