import React from "react";
import { Breadcrumb, Layout } from "antd";
import DashboardLayout from "../../components/layout/DashboardLayout";
import BBtn from "../../components/button";
import Images from "../../assets/gen";
import ISelect from "../../components/select";
import InputGroup from "../../components/textInput";
import ISearch from "../../components/search";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  return (
    <div>
      <ISelect
        name='1'
        width={100}
        onChange={() => {}}
        option={["1", "2", "3"]}
      />
      <ISelect
        name='2'
        width={"90%"}
        onChange={() => {}}
        option={["1", "2", "3"]}
      />
      <InputGroup
        name='cak'
        title='cack'
        width={"90%"}
        onChange={() => {}}
        placeHolder='concac'
        option={["1"]}
      />
      <ISearch onChange={() => {}} />
    </div>
  );
};

export default Home;
