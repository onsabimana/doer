import React, { Component }from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';

import List from 'components/List';
import Toggle from 'components/Toggle';

import { Wrapper } from './styles';

const items = [
  { id: 1, item: 'Buy Milk' },
  { id: 2, item: 'Return Books' },
  { id: 3, item: 'Gym' },
];

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Toggle
              onChange={() => console.log('Toggled')}
              checked={false}
            />
            <List items={items} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
