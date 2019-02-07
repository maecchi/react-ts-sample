import * as React from 'react';

interface Props {
  // tslint:disable-next-line:react-unused-props-and-state
  text: string;
  // tslint:disable-next-line:react-unused-props-and-state
  completed: boolean;
  // tslint:disable-next-line:react-unused-props-and-state
  onClick: () => void;
}

const component: React.SFC<Props> = (props: Props) => {
  return (
    <li
      role="action"
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
      }}
    >
      {props.text}
    </li>
  );
};

export default component;
