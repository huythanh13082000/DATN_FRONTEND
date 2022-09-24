import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Images from "../../assets/gen";
import { AppColors } from "../../utils/appColors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .c-row {
    display: flex;
    flex-direction: row;
  }

  .title {
    color: ${AppColors.textPrimary};
    font-weight: 600;
  }

  .input {
    background: white;
    margin-top: 4px;
    flex: 1;
    height: 40px;
    border: 1px solid ${AppColors.border};
    border-radius: 4px;
    padding-left: 10px;
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

    .arrow-down {
      top: 16px;
      right: 10px;
      position: absolute;
      width: 16px;
      height: 16px;
      z-index: 10000;
    }
  }
  .c-expand {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    top: 40;
    max-height: 200px;
    border: 1px solid ${AppColors.border};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: auto;
    z-index: 10000;

    .view-option {
      padding: 10px 6px;
    }

    .view-option:hover {
      background: ${AppColors.textPrimary};
      span {
        color: white;
      }
    }
  }
`;

export interface IProps {
  name: string;
  disabled?: boolean;
  placeHolder?: string;
  width?: any;
  option: Array<string>;
  onChange: (event: any) => void;
}

const ISelect = (props: IProps) => {
  const [isExpand, setExpand] = useState(false);
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const openOption = () => {
    setExpand(!isExpand);
  };

  useEffect(() => {
    document.addEventListener("click", function (event: any) {
      var myElementToCheckIfClicksAreInsideOf = document.getElementById(
        props.name + "input"
      );
      if (
        myElementToCheckIfClicksAreInsideOf &&
        myElementToCheckIfClicksAreInsideOf.contains(event.target)
      ) {
      } else {
        setExpand(false);
      }
    });
  }, [props.name]);

  return (
    <Container style={props.width ? { width: props.width } : {}}>
      <div className='relative'>
        <div
          id={props.name + "input"}
          onClick={openOption}
          className='view-input'
        >
          <input
            style={props.width ? { width: props.width } : {}}
            className='input'
            disabled={true}
            value={value}
            placeholder={props.placeHolder ? props.placeHolder : t("SELECT")}
          />
          <img className='arrow-down' src={Images.chevronDown} alt='' />
        </div>
        {!!isExpand && (
          <div className='c-expand'>
            {props.option.map((item, index) => (
              <div
                onClick={() => {
                  setValue(item);
                  props.onChange(item);
                }}
                key={item + index}
                className='view-option'
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ISelect;
