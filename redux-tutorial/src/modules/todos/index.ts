import { addTodo, AddTodoAction } from './AddTodo';
import { toggleTodo, ToggleTodoAction } from './ToggleTodos';

type Actions = AddTodoAction | ToggleTodoAction;

export interface Info {
  id: number;
  text: string;
  completed: boolean;
}

export interface State {
  // ページ全体で保持しておくべき情報はTodoの配列くらい
  todos: Info[];
}

const init = (): State => {
  return {
    todos: [],
  };
};

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(e => {
          return e.id !== action.payload.id
            ? e
            : {
                ...e,
                completed: !e.completed,
              };
        }),
      };
    default:
      return state;
  }
};

export const actionCreator = {
  addTodo,
  toggleTodo,
};
