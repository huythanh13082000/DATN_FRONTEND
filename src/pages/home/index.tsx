import React from 'react'
import {Breadcrumb, Layout} from 'antd'
import DashboardLayout from '../../components/layout/DashboardLayout'
import ISearch from '../../components/search'
const {Header, Content, Footer, Sider} = Layout

const Home = () => {
  return (
    <div>
      <ISearch onChange={() => console.log(222)} />
    </div>
  )
}

export default Home
