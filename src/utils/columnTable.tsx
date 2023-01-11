import {Radio} from 'antd'
import moment from 'moment'
import {DepartmentModel} from '../models/department'
import {MoneyModel} from '../models/money'
import {NotificationModel} from '../models/notification'
import {PersonnelModel} from '../models/personnel'
import {RankModel} from '../models/rank'
import {UserModel} from '../models/user.model'
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
    title: 'Thời gian chấm công',
    dataIndex: 'createdAt',
    render: (createdAt: string) => (
      <span>{moment(createdAt).format('DD/MM/YYYY h:mm:ss a')}</span>
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

export const columnSummaryOfWorkingDays = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'name',
  },

  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Tống số công',
    dataIndex: 'count',
    // render: (text: string) => <span>{momentFomat(text)}</span>,
  },
  {
    title: 'Tổng ngày nghỉ có phép',
    dataIndex: 'sumDayOff',
    // render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const columnsUser = [
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
  // {
  //   title: 'Ngày chỉnh sửa',
  //   dataIndex: 'updatedAt',
  //   render: (text: string) => <span>{momentFomat(text)}</span>,
  // },
]

export const personnelAllowanceColumn = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
  },
  {
    title: 'Tên trợ cấp',
    dataIndex: 'allowance',
    render: (allowance: MoneyModel) => <span>{allowance.name}</span>,
  },
  {
    title: 'Số tiền',
    dataIndex: 'allowance',
    render: (allowance: MoneyModel) => <span>{allowance.value}</span>,
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const personnelBonusColumn = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
  },
  {
    title: 'Tên thưởng',
    dataIndex: 'bonus',
    render: (bonus: MoneyModel) => <span>{bonus.name}</span>,
  },
  {
    title: 'Số tiền',
    dataIndex: 'bonus',
    render: (bonus: MoneyModel) => <span>{bonus.value}</span>,
  },
  {
    title: 'Ngày thưởng',
    dataIndex: 'dateBonus',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const personnelFineColumn = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
  },
  {
    title: 'Tên phạt',
    dataIndex: 'fine',
    render: (fine: MoneyModel) => <span>{fine.name}</span>,
  },
  {
    title: 'Số tiền',
    dataIndex: 'fine',
    render: (fine: MoneyModel) => <span>{fine.value}</span>,
  },
  {
    title: 'Ngày phạt',
    dataIndex: 'dateFine',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const notificationColumn = [
  {
    title: 'Thông báo',
    dataIndex: 'name',
    render: (name: string) => <span>{name}</span>,
  },
  {
    title: 'Người tạo',
    dataIndex: 'sender',
    render: (sender: UserModel) => <span>{sender.name}</span>,
  },
  {
    title: 'Số tiền',
    dataIndex: 'fine',
    render: (fine: MoneyModel) => <span>{fine.value}</span>,
  },
  {
    title: 'Ngày phạt',
    dataIndex: 'dateFine',
    render: (text: string) => <span>{momentFomat(text)}</span>,
  },
]

export const personnelDayOffColumn = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'personnel',
    render: (personnel: PersonnelModel) => <span>{personnel.name}</span>,
  },
  {
    title: 'Ngày nghỉ',
    dataIndex: 'dayOff',
    render: (dayOff: string) => <span>{momentFomat(dayOff)}</span>,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (status: number) => (
      <span>
        {status < 0.5
          ? 'Nghỉ chiều'
          : status > 0.5
          ? 'Nghỉ cả ngày'
          : 'Nghỉ sáng'}
      </span>
    ),
  },
]

export const summaryOfSalaryColumn = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'name',
    render: (name: string) => <span>{name}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (email: string) => <span>{email}</span>,
  },
  {
    title: 'Số công',
    dataIndex: 'count',
    render: (count: string) => <span>{count}</span>,
  },
  {
    title: 'Số ngày nghỉ phép',
    dataIndex: 'sumDayOff',
    render: (sumDayOff: string) => <span>{sumDayOff}</span>,
  },
  {
    title: 'Tiền phạt',
    dataIndex: 'listFine',
    render: (listFine: MoneyModel[]) => (
      <>
        {listFine.map((item, index) => {
          // sum = +Number(item.value)
          return (
            <p>
              {index + 1}, {item.name} - {formatNumberAsCurrency(item.value)}
            </p>
          )
        })}

        {/* <p>Tổng phạt - {sum}</p> */}
      </>
    ),
  },
  {
    title: 'Tiền thưởng',
    dataIndex: 'listBonus',
    render: (listBonus: MoneyModel[]) => (
      // if (listBonus.length !== 0)
      <>
        {listBonus.map((item, index) => {
          // sum = +Number(item.value)
          return (
            <p>
              {index + 1}, {item.name} - {formatNumberAsCurrency(item.value)}
            </p>
          )
        })}
        {/* <p>Tổng thưởng - {sum}</p> */}
      </>
    ),
  },
  {
    title: 'Thực nhận',
    dataIndex: 'salary',
    render: (salary: number) => (
      <>
        <p>{formatNumberAsCurrency(salary)}</p>
      </>
    ),
  },
]
