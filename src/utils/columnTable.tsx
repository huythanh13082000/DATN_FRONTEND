import {Radio} from 'antd'
import moment from 'moment'
import {DepartmentModel} from '../models/department'
import {PersonnelModel} from '../models/personnel'
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
        style={{
          width: '70px',
          height: '70px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
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
    render: (sex: string) => <span>{sex === 'male' ? 'Nam' : 'Nữ'}</span>,
  },

  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (status: boolean) => (
      <span>{status ? 'Đang hoạt động' : 'Đã nghỉ việc'}</span>
    ),
  },
]

export const columnsTableTimeSheet = [
  {
    title: 'Ảnh',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => (
      <img
        src={`${FILE}/${personnel.avatar}`}
        alt='avatar'
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    ),
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
  },
  {
    title: 'Giới tính',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => (
      <span>{personnel.sex === 'male' ? 'Nam' : 'Nữ'}</span>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.email}</span>,
  },
  {
    title: 'Ngày làm việc',
    dataIndex: 'workingDay',
    render: (workingDay: string) => (
      <span>{moment(workingDay).format('DD/MM/YYYY h:mm:ss a')}</span>
    ),
  },
  // {
  //   title: 'Trạng thái',
  //   dataIndex: 'status',
  //   render: (status: number) => (
  //     <Radio.Group value={status}>
  //       <>
  //         <Radio value={1}>Nghỉ</Radio>
  //         <Radio value={2}>làm nửa ngày</Radio>
  //         <Radio value={3}>làm cả ngày</Radio>
  //       </>
  //     </Radio.Group>
  //   ),
  // },
]

export const columnsMoney = [
  {
    title: 'Tên',
    dataIndex: 'name',
  },

  {
    title: 'Số tiền',
    dataIndex: 'value',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

// export const columns = [
//   {
//     title: 'Tên thưởng',
//     dataIndex: 'name',
//   },

//   {
//     title: 'Số tiền',
//     dataIndex: 'value',
//   },
//   {
//     title: 'Ngày tạo',
//     dataIndex: 'createdAt',
//     render: (text: string) => <span>{momentFomat(text)}</span>,
//   },
// ]
