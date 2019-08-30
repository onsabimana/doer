import { connect } from 'react-redux';

import appActions from 'store/app/actions';
import todoActions from 'store/todo/actions';

import App from './App';

const mapStateToProps = state => ({
  theme: state.app.theme,
  todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
  setTheme: ({ theme }) => dispatch(appActions.setTheme({ theme })),
  loadTodos: ({ todos }) => dispatch(todoActions.loadTodos({ todos: todos })),
  updateTodo: (todo) => dispatch(todoActions.updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
