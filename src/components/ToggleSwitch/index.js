import React from 'react';

import { Label } from './styles';

const ToggleSwitch = ({ onChange }) => {
  return(
    <Label>
      <input type="checkbox" onChange={onChange}/>
      <span className="slider round"></span>
    </Label>
  );
}

export default ToggleSwitch;
