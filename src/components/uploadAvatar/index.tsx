import {Upload, UploadFile, UploadProps} from 'antd'
import {RcFile} from 'antd/lib/upload'
import React, {useState} from 'react'
import ImgCrop from 'antd-img-crop'

const UploadAvatar = (props: {
  file?: Blob | string | UploadFile
  setFile: (params: Blob | string | UploadFile) => void
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ])

  const onChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
    setFileList(newFileList)
    props.setFile(newFileList[0])
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  console.log(fileList[0])

  return (
    <ImgCrop rotate>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default UploadAvatar
