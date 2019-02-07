import * as React from 'react';
import Todo from './Todo';

interface Props {
  // tslint:disable-next-line:react-unused-props-and-state
  todos: {
    // tslint:disable-next-line:array-type
    id: number;
    text: string;
    completed: boolean;
  }[];
  // tslint:disable-next-line:react-unused-props-and-state
  toggleTodo: (id: number) => void;
}

const component: React.SFC<Props> = (props: Props) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => {
              props.toggleTodo(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default component;
