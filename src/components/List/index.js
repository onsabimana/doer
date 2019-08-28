import React from 'react';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

const List = ({ items }) => (
  <ListWrapper>
    {items.map(item => <ListItem {...item} key={item.id}/>)}
  </ListWrapper>
);

export default List;
