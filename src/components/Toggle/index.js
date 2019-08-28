import React from 'react';
import Switch from 'react-switch';

import { Label } from './styles';

const Toggle = ({ onChange, checked }) => {
  return (
    <Label>
      <Switch
        onChange={onChange}
        checked={false}
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </Label>
  );
}

export default Toggle;
