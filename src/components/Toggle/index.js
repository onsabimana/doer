import React from 'react';
import Switch from 'react-switch';

import { Label } from './styles';

const Toggle = ({ onChange, offColor, onColor }) => {
  return (
    <Label>
      <Switch
        onChange={onChange}
        checked={false}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={onColor}
        offColor={offColor}
        offHandleColor={onColor}
        onHandleColor={offColor}
      />
    </Label>
  );
}

export default Toggle;
