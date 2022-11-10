import {DepartmentModel} from '../models/department'
import {RankModel} from '../models/rank'
import {FILE, formatNumberAsCurrency, momentFomat} from './constants'

export const columnsDepartment: any = [
  {
    title: 'Tên phòng ban',
    dataIndex: 'name',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
  {
    title: 'Ngày chỉnh sửa',
    dataIndex: 'updatedAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const columnsRank: any = [
  {
    title: 'Tên chức vụ',
    dataIndex: 'name',
  },
  {
    title: 'Lương cơ bản',
    dataIndex: 'value',
  },
  {
    title: 'Phòng ban',
    dataIndex: 'department',
    render: (department: DepartmentModel) => (
      <span>{department && department.name}</span>
    ),
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
  {
    title: 'Ngày sửa',
    dataIndex: 'updatedAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const columnsPersonnel: any = [
  {
    title: 'Ảnh',
    dataIndex: 'avatar',
    render: (avatar: string) => (
      <img
        src={`${FILE}/${avatar}`}
        alt='avatar'
        style={{width: '70px', height: '70px', objectFit: 'cover'}}
      />
    ),
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'name',
  },
  // {
  //   title: 'Địa chỉ',
  //   dataIndex: 'address',
  // },
  {
    title: 'Chức vụ',
    dataIndex: 'rank',
    render: (rank: RankModel) => <span>{rank && rank.name}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  // {
  //   title: 'Số điện thoại',
  //   dataIndex: 'phoneNumber',
  //   render: (text: string) => <span>{formatNumberAsCurrency(text)}</span>,
  // },

  // {
  //   title: 'Căn cước CD',
  //   dataIndex: 'IDCard',
  // },
  // {
  //   title: 'Ngày tạo',
  //   dataIndex: 'createdAt',
  //   render: (text: string) => <span>{momentFomat(text)}</span>,
  // },
  // {
  //   title: 'Ngày sửa',
  //   dataIndex: 'updatedAt',
  //   render: (text: string) => <span>{momentFomat(text)}</span>,
  // },
  {
    title: 'Ngày sinh',
    dataIndex: 'dateOfBirth',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
  },

  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (status: boolean) => (
      <span>{status ? 'Đang hoạt động' : 'Đã nghỉ việc'}</span>
    ),
  },
]

export const columnsTableCreateTimeSheet = [
  {
    title: 'Ảnh',
    dataIndex: 'avatar',
    render: (avatar: string) => (
      <img
        src={`${FILE}/${avatar}`}
        alt='avatar'
        style={{width: '70px', height: '70px', objectFit: 'cover'}}
      />
    ),
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'name',
  },
  {
    title: 'Chức vụ',
    dataIndex: 'rank',
    render: (rank: RankModel) => <span>{rank && rank.name}</span>,
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
  },

  {
    title: 'Trạng thái',
    dataIndex: 'status',
    // render: (status: boolean) => (
    //   <span>{status ? 'Đang hoạt động' : 'Đã nghỉ việc'}</span>
    // ),
  },
]
