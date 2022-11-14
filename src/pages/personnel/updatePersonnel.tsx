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
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {urlApi} from '../../apis/url'
import SelectApi from '../../components/selectApi'
import {personnelAction} from '../../feature/personnel/personnelSlice'
import {rankAction} from '../../feature/rank/rankSlice'
import {PersonnelModel} from '../../models/personnel'
import {RankModel} from '../../models/rank'
import {FILE} from '../../utils/constants'

const PersonnelUpdate = (props: {data: PersonnelModel}) => {
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
  const [urlAvatar, setUrlAvatar] = useState<string>('')
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
  console.log(111333, props.data.rank._id)
  useEffect(() => {
    setName(props.data.name)
    props.data.rank && props.data.rank._id && setRank(props.data.rank._id)
    setAddress(props.data.address)
    setEmail(props.data.email)
    setPhoneNumber(props.data.phoneNumber)
    setDateOfBirth(props.data.dateOfBirth)
    setSex(props.data.sex)
    setUrlAvatar(props.data.avatar)
    setStatus(props.data.status)
  }, [props.data])

  const updatePersonnel = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('rank', rank)
    avatar && formData.append('avatar', avatar)
    formData.append('address', address)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    dateOfBirth && formData.append('dateOfBirth', dateOfBirth)
    formData.append('sex', sex)
    formData.append('status', JSON.stringify(status))
    formData.append('_id', props.data._id)
    dispatch(personnelAction.updatePersonnel(formData))
  }
  console.log(dateOfBirth)
  console.log(111, urlAvatar)
  return (
    <Row>
      <div>
        <p>Chọn ảnh :</p>
        <input
          type='file'
          onChange={(e: any) => {
            const avatar = URL.createObjectURL(e.target.files[0])
            setUrlAvatar(avatar)
            console.log(avatar)
            setAvatar(e.target.files[0])
          }}
        />
        {urlAvatar && (
          <img
            src={
              !urlAvatar.includes('blob') ? `${FILE}${urlAvatar}` : urlAvatar
            }
            alt='avatar'
            style={{
              marginTop: '0.5rem',
              width: '90px',
              height: '90px',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
      <p>Tên nhân viên :</p>
      <Input
        placeholder='name'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
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
        <p style={{margin: 0}}>Giới tính : &nbsp;</p>
        <Radio.Group onChange={(e) => setSex(e.target.value)} value={sex}>
          <Radio value={'male'}>Nam</Radio>
          <Radio value={'female'}>Nữ</Radio>
        </Radio.Group>
      </div>
      <div style={{width: '100%', display: 'flex'}}>
        <p style={{margin: 0}}>Trạng thái : &nbsp;</p>
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
        <Button type='primary' onClick={updatePersonnel}>
          Lưu
        </Button>
      </Col>
    </Row>
  )
}

export default PersonnelUpdate
