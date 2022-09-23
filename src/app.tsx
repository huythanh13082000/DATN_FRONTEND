import {Breadcrumb, Layout} from 'antd'
import React, {useState} from 'react'
import MenuHome from './components/menu'
import './app.css'
import HeaderComponent from './components/header'

const {Header, Content, Footer, Sider} = Layout

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  // i18next.changeLanguage('ko')
  // const {t} = useTranslation()

  return (
    <Layout style={{minHeight: '100vh'}}>
      {/* <p>
        <h3>{t('Thanks.1')}</h3> <h3>{t('Why.1')}</h3>{' '}
      </p> */}
      <Sider
        style={{backgroundColor: 'white'}}
        className='app-sider'
        collapsible={false}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='logo'>
          <p className='app-p1'>
            <i
              className='fa-solid fa-bars'
              style={{paddingLeft: collapsed ? '0.35rem' : 0}}
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
      <Layout className='site-layout' style={{backgroundColor: '#f5f5f5'}}>
        <Header
          className='site-layout-background'
          style={{padding: '0 1rem', backgroundColor: '#f5f5f5'}}
          children={<HeaderComponent />}
        />
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{padding: 24, minHeight: 360}}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default App
