import {Modal} from 'antd'

const ModelDetail = (props: {
  open: boolean
  setOpen: () => void
  data: any
}) => {
  const handleOk = () => {
    props.setOpen()
  }

  const handleCancel = () => {
    props.setOpen()
  }
  console.log(123321, props.data)

  return (
    <>
      <Modal
        title='Chi tiết'
        open={props.open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {Object.keys(props.data).map((key, index) => {
          console.log(typeof props.data[key])
          return (
            key !== '__v' &&
            key !== 'key' && (
              <p>
                {key}:{' '}
                {typeof props.data[key] === 'object' &&
                Array.isArray(props.data[key])
                  ? props.data[key].map((item: any) => {
                      return (
                        <span>
                          {item.name}: {item.value}
                        </span>
                      )
                    })
                  : typeof props.data[key] === 'object'
                  ? props.data[key].name
                  : props.data[key]}
              </p>
            )
          )
        })}
      </Modal>
    </>
  )
}

export default ModelDetail
