import React from 'react';
import Checkbox from 'components/Checkbox';

import { Item, Description } from './styles';

const ListItem = ({ id, item, checked, updateTodo}) => {
  const textDecoration = checked ? "line-through": "none";

  // onChange the item toggles between checked or unchecked. In either instance
  // this is what will happen.
  const onChangeResponse = {
    id: id,
    item: item,
    checked: !checked
  };

  return (
    <Item style={{ "textDecoration": textDecoration }}>
      <label>
        <Checkbox checked={checked} onChange={() => updateTodo(onChangeResponse)}/>
        <Description>{item}</Description>
      </label>
    </Item>
  );
};

export default ListItem;
