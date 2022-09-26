import React from "react";
import { Breadcrumb, Layout, Switch } from "antd";
import DashboardLayout from "../../components/layout/DashboardLayout";
import styled from "styled-components";
import { AppColors } from "../../utils/appColors";
import BBtn from "../../components/button";
import InputGroup from "../../components/textInput";
const { Header, Content, Footer, Sider } = Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 30px;
  background: ${AppColors.background};

  .c-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .c-title {
    color: ${AppColors.textPrimary};
    font-weight: 600;
    font-size: 14px;
  }

  .flex-1 {
    flex: 1;
  }

  .space-between {
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: 700;
    font-size: 24px;
    color: ${AppColors.textPrimary};
  }

  .content {
    background: white;
    padding: 24px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
    padding-bottom: 100px;

    .divider {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 1px;
      background: ${AppColors.divider};
    }
  }
  .ant-switch-checked {
    background-color: ${AppColors.green};
  }
`;

const Setting = () => {
  return (
    <Container>
      <span className='title'>세팅</span>
      <div style={{ height: 40 }} />
      <div className='c-row'>
        <BBtn
          title='모바일'
          color={AppColors.textPrimary}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='계기반'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='우편'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='차량'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='이벤트'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='지불'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
        <div style={{ width: 8 }} />
        <BBtn
          title='체계'
          color={AppColors.red}
          styleText={{ fontSize: 16, fontWeight: "500" }}
        />
      </div>
      <div className='c-row'>
        <div className='content'>
          <div className='sub-title'>모바일 구성</div>
          <div className='divider'></div>
          <div className='c-row'>
            <div className='c-row '>
              <InputGroup
                onChange={() => {}}
                name='FAQ URL'
                title='FAQ URL'
                value='https://hello.com/home'
                background={"#ECF0F3"}
                width={400}
              />
              <div style={{ width: 10 }}></div>
              <BBtn title='편집' color={AppColors.green} />
            </div>
            <div style={{ width: 30 }}></div>
            <div className='c-row '>
              <InputGroup
                onChange={() => {}}
                name='근접 반경(미터 단위)'
                title='근접 반경(미터 단위)'
                value='3000'
                background={"#ECF0F3"}
                width={400}
              />
              <div style={{ width: 10 }}></div>
              <BBtn title='편집' color={AppColors.green} />
            </div>
          </div>
          <div style={{ height: 20 }}></div>
          <div className='c-row'>
            <InputGroup
              onChange={() => {}}
              name='배터리 부족'
              title='배터리 부족'
              value={"30%"}
              option={["30%", "40%"]}
              width={400}
            />
            <div style={{ width: 30 }}></div>
            <InputGroup
              onChange={() => {}}
              name='멀티 라이드'
              title='멀티 라이드'
              value={"1"}
              option={["1", "2"]}
              width={400}
            />
          </div>
          <div style={{ height: 20 }}></div>
          <div className='c-row'>
            <InputGroup
              onChange={() => {}}
              name='유휴 차량 위치 업데이트(분)'
              title='유휴 차량 위치 업데이트(분)'
              value={"10"}
              option={["10", "20"]}
              width={400}
            />
            <div style={{ width: 30 }}></div>
            <div
              style={{
                height: 40,
              }}
              className='flex-1 c-row space-between'
            >
              <span className='c-title'>외부 인앱 지원 통합</span>
              <Switch defaultChecked onChange={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Setting;
