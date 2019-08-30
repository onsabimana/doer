import styled from 'styled-components';

import { colorsDark, colorsLight} from 'styles/palette';

export const Label = styled.label`
  background-color: ${({ theme }) => theme.background}
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 10px;
  margin-right: 20px;
  float: right;
  margin-top: 24px;
  margin-bottom: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colorsLight.background};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({theme}) => theme.background};
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: ${colorsDark.backgroundSecondary};
  }

  input:focused + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  .slider.round {
    border-radius: 34px;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
