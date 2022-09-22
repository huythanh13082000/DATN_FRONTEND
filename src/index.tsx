import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import Router from './router'
import MenuHome from './components/menu'
import {Layout} from 'antd'
const {Header, Footer, Sider, Content} = Layout

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Layout>
      <Sider>
        <MenuHome />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <BrowserRouter>
            {/* <CustomizedSnackbars /> */}
            {/* <LayOut> */}
            <Router />
            {/* </LayOut> */}
          </BrowserRouter>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
