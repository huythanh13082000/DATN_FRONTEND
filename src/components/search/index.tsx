import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Images from "../../assets/gen";
import { AppColors } from "../../utils/appColors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .input {
    background: white;
    margin-top: 4px;
    height: 35px;
    width: 300px;
    border: 1px solid ${AppColors.borderSecondary};
    border-radius: 4px;
    padding-left: 36px;
    padding-right: 10px;
  }

  .input::placeholder {
    color: ${AppColors.textPlaceholder};
  }

  .relative {
    position: relative;
  }
  .view-input {
    display: flex;
    position: relative;

    .search {
      top: 14px;
      left: 10px;
      position: absolute;
      width: 16px;
      height: 16px;
      z-index: 10000;
    }
  }
`;

export interface IProps {
  placeHolder?: string;
  onChange: (event: any) => void;
}

const ISearch = (props: IProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className='relative'>
        <div className='view-input'>
          <img className='search' src={Images.searchNormal} alt='' />
          <input
            className='input'
            onChange={props.onChange}
            placeholder={
              props.placeHolder ? props.placeHolder : t("TYPE_IN_SEARCH")
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default ISearch;
