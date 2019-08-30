import React from 'react';

import { StyledCheckbox } from './styles';

const Checkbox = ({ checked, onChange }) => {
  return <StyledCheckbox type="checkbox" checked={checked} onChange={onChange}/>
};

export default Checkbox;
