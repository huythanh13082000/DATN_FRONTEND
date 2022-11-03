
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
