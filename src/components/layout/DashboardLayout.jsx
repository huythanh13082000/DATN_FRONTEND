import React, {useState} from 'react'
import {Breadcrumb, Layout} from 'antd'
import MenuHome from '../menu'
import HeaderComponent from '../header'
const {Header, Content, Footer, Sider} = Layout

const DashboardLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{minHeight: '100vh', backgroundColor: '#fafafa'}}>
      {/* <p>
        <h3>{t('Thanks.1')}</h3> <h3>{t('Why.1')}</h3>{' '}
      </p> */}
      <Sider
        style={{
          backgroundColor: 'white',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
        }}
        collapsible={true}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo'>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingTop: '1rem',
            }}
          >
            {/* <i
              className='fa-solid fa-bars'
              style={{paddingLeft: collapsed ? '0.35rem' : 0}}
              onClick={() => setCollapsed(!collapsed)}
            ></i> */}
            {!collapsed && (
              <>
                {/* <img
                  src='/img/logo.png'
                  style={{width: '80px', height: '50px'}}
                  alt=''
                /> */}
                <p
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#002140',
                    margin: 0,
                  }}
                >
                  Quản lý tiền lương
                </p>
              </>
            )}
          </p>
        </div>
        <MenuHome />
      </Sider>
      <Layout
        className='site-layout'
        style={{backgroundColor: '#fafafa', margin: '0 1.5rem'}}
      >
        <Header
          className='site-layout-background'
          style={{padding: 0}}
          children={<HeaderComponent />}
        />
        {children}
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
