import { useEffect, useState } from "react";
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
  disabled?: boolean;
  required?: boolean;
  title?: string;
  placeHolder?: string;
  option?: Array<string>;
  onChange: (event: any) => void;
}

const InputGroup = (props: IProps) => {
  const [isExpand, setExpand] = useState(false);
  const [value, setValue] = useState("");

  const openOption = () => {
    setExpand(!isExpand);
  };

  useEffect(() => {
    document.addEventListener("click", function (event: any) {
      var myElementToCheckIfClicksAreInsideOf = document.getElementById(
        props.title + "input"
      );
      if (
        myElementToCheckIfClicksAreInsideOf &&
        myElementToCheckIfClicksAreInsideOf.contains(event.target)
      ) {
      } else {
        setExpand(false);
      }
    });
  }, [props.title]);

  return (
    <Container>
      <div className='c-row'>
        <span className='title'>{props.title}</span>
        <span style={{ color: "red" }}>&nbsp;*</span>
      </div>
      {props.option ? (
        <div className='relative'>
          <div
            id={props.title + "input"}
            onClick={openOption}
            className='view-input'
          >
            <input
              className='input'
              disabled={true}
              value={value}
              placeholder={props.placeHolder}
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
      ) : (
        <input
          className='input'
          disabled={props.disabled}
          onChange={props.onChange}
          placeholder={props.placeHolder}
        />
      )}
    </Container>
  );
};

export default InputGroup;
