import React, { Component }from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight} from 'styles/palette';

import List from 'components/List';
import ToggleSwitch from 'components/ToggleSwitch';
import { Wrapper } from './styles';

const items = [
  { id: 1, item: 'Buy Milk' },
  { id: 2, item: 'Return Books' },
  { id: 3, item: 'Gym' },
  { id: 4, item: 'Read a Book'},
];

class App extends Component {

  toggleTheme = (event) => {
    const { setTheme } = this.props;

    const checked = event.target.checked;
    const theme = checked? 'light' : 'dark';

    setTheme({theme: theme});
  }

  render() {
    const { theme } = this.props;

    return (
      <ThemeProvider theme={theme === 'dark' ? colorsDark: colorsLight}>
        <div>
          <div>
            <ToggleSwitch onChange={this.toggleTheme}/>
          </div>
          <Wrapper>
            <List items={items} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
