import {DepartmentModel} from '../models/department'
import {momentFomat} from './constants'

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
    render: (department: DepartmentModel) => <span>{department.name}</span>,
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
