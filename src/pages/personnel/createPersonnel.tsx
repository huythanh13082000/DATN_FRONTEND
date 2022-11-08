import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Row,
  UploadFile,
} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {urlApi} from '../../apis/url'
import SelectApi from '../../components/selectApi'
import UploadAvatar from '../../components/uploadAvatar'
import {personnelAction} from '../../feature/personnel/personnelSlice'
import {rankAction} from '../../feature/rank/rankSlice'

const PersonnelCreate = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')
  const [rank, setRank] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<string>()
  const [sex, setSex] = useState<string>('')
  const [status, setStatus] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<any>()
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  console.log(111333, avatar)
  const createRank = () => {
    const formData = new FormData()
    // formData.append('name', name)
    avatar && formData.append('avatar', avatar)
    // formData.append('address', address)
    // formData.append('email', email)
    // formData.append('phoneNumber', phoneNumber)
    // formData.append('dateOfBirth', JSON.stringify(dateOfBirth))
    // formData.append('sex', sex)
    // formData.append('status', JSON.stringify(status))
    dispatch(personnelAction.createPersonnel(formData))
  }
  console.log(dateOfBirth)
  return (
    <Row>
      <p>Chọn ảnh :</p>
      {/* <UploadAvatar
        file={avatar}
        setFile={(file: Blob | string | UploadFile) => setAvatar(file)}
      /> */}
      <input type='file' onChange={(e: any) => setAvatar(e.target.files[0])} />
      <p>Tên nhân viên :</p>
      <Input
        placeholder='name'
        value={name}
        onChange={(e) => {
          setAvatar(e.target.value)
        }}
      />
      <p>Địa chỉ :</p>
      <Input
        placeholder='address'
        value={address}
        onChange={(e) => {
          setAddress(e.target.value)
        }}
      />
      <p>Email :</p>
      <Input
        placeholder='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <p>Số điện thoại :</p>
      <Input
        placeholder='phoneNumber'
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value)
        }}
      />
      <p>Chức vụ :</p>
      <SelectApi
        url={urlApi.rank}
        field={rank}
        setField={(params: string) => setRank(params)}
      />
      <p>Ngày sinh :</p>
      <DatePicker
        format={dateFormatList}
        style={{width: '100%'}}
        value={moment(dateOfBirth)}
        onChange={(e) => setDateOfBirth(e?.format())}
      />
      <div style={{width: '100%', display: 'flex', margin: '0.5rem 0'}}>
        <p>Giới tính : &nbsp;</p>
        <Radio.Group onChange={(e) => setSex(e.target.value)} value={sex}>
          <Radio value={'male'}>Nam</Radio>
          <Radio value={'female'}>Nữ</Radio>
        </Radio.Group>
      </div>
      <div style={{width: '100%', display: 'flex'}}>
        <p>Trạng thái : &nbsp;</p>
        <Checkbox
          checked={status}
          onChange={(e) => {
            setStatus(e.target.checked)
          }}
        >
          {status ? 'Đang làm viêc' : 'Đã nghỉ việc'}
        </Checkbox>
      </div>
      <Col span={24} style={{marginTop: '1rem'}}>
        <Button type='primary' onClick={createRank}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default PersonnelCreate
