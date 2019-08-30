import React, { Component }from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight} from 'styles/palette';

import List from 'components/List';
import ToggleSwitch from 'components/ToggleSwitch';
import { Title, Wrapper } from './styles';

const items = [
  { id: 1, item: 'Buy Milk', checked: false},
  { id: 2, item: 'Return Books', checked: false},
  { id: 3, item: 'Gym', checked: false},
  { id: 4, item: 'Read a Book', checked: false},
];

class App extends Component {

  componentDidMount = () => {
    this.props.loadTodos({ todos: items });
  }

  toggleTheme = (event) => {
    const { setTheme } = this.props;

    const checked = event.target.checked;
    const theme = checked? 'light' : 'dark';

    setTheme({theme: theme});
  }

  render() {
    const { theme, todos, updateTodo} = this.props;

    return (
      <ThemeProvider theme={theme === 'dark' ? colorsDark: colorsLight}>
        <div>
          <Wrapper>
            <Title>My Todo List </Title>
            <ToggleSwitch onChange={this.toggleTheme} />
            <List items={todos} updateTodo={updateTodo}/>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
