import styled from "styled-components";
import { AppColors } from "../../utils/appColors";

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
`;

export interface IProps {
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  title?: string;
  color?: string;
}

const BBtn = (props: IProps) => {
  return (
    <Container
      style={{ background: props.color || AppColors.red }}
      disabled={props.disabled || false}
    >
      {props.iconLeft && (
        <img style={{ marginRight: 8 }} src={props.iconLeft} alt='' />
      )}
      <span>{props.title}</span>
      {props.iconRight && (
        <img style={{ marginLeft: 8 }} src={props.iconRight} alt='' />
      )}
    </Container>
  );
};

export default BBtn;
