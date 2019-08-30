import React from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

const List = ({ items, updateTodo}) => (
  <ListWrapper>
    {items.map(item => <ListItem {...item} updateTodo={updateTodo} key={item.id}/>)}
  </ListWrapper>
);

export default List;
