import { actionTypes } from './actions';

const getInitialState = () => ({
  todos: [],
});

const todo = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.LOAD_TODOS:
      return {
        ...state,
        ...payload
      };
    case actionTypes.UPDATE_TODO:
      let todos = state.todos;
      const newTodo = { ...payload };
      // find index of todo to replace
      const index = todos.findIndex((todo) => todo.id === newTodo.id);
      todos[index] = newTodo;

      return {
        ...state,
        todos: [...todos]
      };

    default:
      return state;
  }
};

export default todo;
