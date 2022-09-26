import styled from 'styled-components'
import {AppColors} from '../../utils/appColors'

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  img {
    width: 18px;
    height: 18px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: white;
  }
`

export interface IProps {
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
  icon?: string
  title?: string
  color?: string
  styleText?: React.CSSProperties
  onClick?: () => void
}

const BBtn = (props: IProps) => {
  const _buildType1 = () => {
    return <img src={props.icon} alt='' />
  }

  const _buildType2 = () => {
    return (
      <>
        {props.iconLeft && (
          <img style={{marginRight: 8}} src={props.iconLeft} alt='' />
        )}
        <span style={props.styleText ? props.styleText : {}}>
          {props.title}
        </span>
        {props.iconRight && (
          <img style={{marginLeft: 8}} src={props.iconRight} alt='' />
        )}
      </>
    )
  }
  return (
    <Container
      style={{background: props.color || AppColors.red}}
      disabled={props.disabled || false}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.icon ? _buildType1() : _buildType2()}
    </Container>
  )
}

export default BBtn
