import React from 'react';
import Checkbox from 'components/Checkbox';

import { Item, Description } from './styles';

const ListItem = ({ item }) => {
  return (
    <Item>
      <label>
        <Checkbox />
        <Description>{item}</Description>
      </label>
    </Item>
  );
};

export default ListItem;
