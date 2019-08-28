import React from 'react';

import List from 'components/List';
import Toggle from 'components/Toggle';

import { Wrapper } from './styles';

const items = [
  {id: 1, item: 'Buy Milk'},
  {id: 2, item: 'Return Books'},
  {id: 3, item: 'Gym'},
];

function App() {

  return (
    <Wrapper>
      <Toggle
        onChange={() => console.log('Toggled')}
        checked={false}
      />
      <List items={items}/>
    </Wrapper>
  );
}

export default App;
