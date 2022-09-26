import styled from 'styled-components'
import {Pagination, Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import {AppColors} from '../../utils/appColors'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {calculateColumnsWidth} from '../../utils/tableHelper'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .c-row {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    .text-show {
      color: ${AppColors.textPlaceholder};
    }
  }

  .ant-table-cell {
    padding-left: 100px;
  }

  .ant-table-thead {
    .thead {
      background: ${AppColors.textPrimary};
      color: white;
      font-weight: 600;
    }
    .thead::before {
      background-color: transparent !important;
      width: 0 !important;
    }
  }
  .table-row-light {
    background-color: #ffffff;
  }
  .table-row-dark {
    background-color: #f6f6f6;
  }

  .thead {
    padding-left: 20px !important;
  }

  .ant-pagination-item {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px;
    border: 1px solid ${AppColors.borderSecondary};
    div {
      color: ${AppColors.textPrimary};
    }
  }

  .ant-pagination-prev {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px;
    background: white;
    border: 1px solid ${AppColors.borderSecondary};

    div {
      color: ${AppColors.textPlaceholder};
    }
  }

  .ant-pagination-next {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px;
    background: white;
    border: 1px solid ${AppColors.borderSecondary};

    div {
      color: ${AppColors.textPlaceholder};
    }
  }

  .ant-pagination-jump-prev {
    border-radius: 4px;
    background: white;
    border: 1px solid ${AppColors.borderSecondary};
  }
  .ant-pagination-jump-next {
    border-radius: 4px;
    background: white;
    border: 1px solid ${AppColors.borderSecondary};
  }

  .ant-pagination-item-active {
    background: ${AppColors.red};
    border: none;
    div {
      color: #ffffff;
    }
  }
`

export interface IProps {
  column: Array<any>
  data: Array<any>
  width?: number
  pageSize: number
  total: number
  onChangePage: (event: any) => void
}

const ITable = (props: IProps) => {
  const [dataColumn, setData] = useState<any>()
  const [currentPage, setCurrentPage] = useState(1)
  const {t} = useTranslation()

  useEffect(() => {
    const newData = props.column.map((item, index) => {
      return {
        ...item,
        className: 'thead',
      }
    })
    setData(newData)
  }, [props.column])

  const dataTable = calculateColumnsWidth(props.column, props.data, 200)

  return (
    <Container>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
        }
        columns={dataColumn}
        dataSource={props.data}
        scroll={{x: props.width ? props.width : dataTable.tableWidth}}
        size='middle'
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(rowIndex)
            }, // click row
          }
        }}
      />
      <div style={{height: 16}}></div>
      <div className='c-row'>
        <div className='text-show'>
          {t('SHOWING_ENTRIES', {
            from: (currentPage - 1) * props.pageSize + 1,
            to: currentPage * props.pageSize,
          })}
        </div>
        <Pagination
          showSizeChanger={false}
          pageSize={props.pageSize}
          current={currentPage}
          defaultCurrent={1}
          total={props.total}
          itemRender={(page, type, element) => {
            if (type === 'page') {
              return <div>{page}</div>
            } else if (type === 'prev') {
              return <div>{t('PREVIOUS')}</div>
            } else if (type === 'next') {
              return <div>{t('NEXT')}</div>
            } else {
              return <div style={{fontWeight: 'bold'}}>...</div>
            }
          }}
          onChange={(page) => {
            setCurrentPage(page)
            props.onChangePage(page)
          }}
        />
      </div>
    </Container>
  )
}

export default ITable

// const data: UserModel[] = [
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com ",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
//   {
//     name: "John Brown",
//     email: "cakk@gmail.com",
//     age: "32",
//     phoneNumber: "0123134234",
//     address: "New York Park",
//   },
// ];

// const columns: ColumnsType<UserModel> = [
//   {
//     title: "Full Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     key: "email",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Phone number",
//     dataIndex: "phoneNumber",
//     key: "phoneNumber",
//   },
//   {
//     title: "address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "address",
//     dataIndex: "address",
//     key: "address1",
//   },
//   {
//     title: "address",
//     dataIndex: "address",
//     key: "address2",
//   },
//   {
//     title: "address",
//     dataIndex: "address",
//     key: "address3",
//   },
// ];

{
  /* <ITable
  onChangePage={(page) => {
    console.log("page", page);
  }}
  data={data.map((item, index) => {
    return { ...item, key: index };
  })}
  pageSize={100}
  total={500}
  column={columns}
/>; */
}
