
const NS = '@doer/todo';

export const actionTypes = {
  LOAD_TODOS: `${NS}/LOAD_TODOS`,
  UPDATE_TODO: `${NS}/UPDATE_TODO`,
};

const actions = {
  loadTodos: (payload = {}) => ({ type: actionTypes.LOAD_TODOS, payload }),
  updateTodo: (payload = {}) => ({ type: actionTypes.UPDATE_TODO, payload }),
};

export default actions;
