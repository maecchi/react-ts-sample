import * as React from 'react';
import { Actions } from '../containers/sampleContainer';
import { State } from '../reducers/sampleReducers';

type Props = State & Actions;

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="value"
        value={props.value}
        onChange={e => props.updateValue(e.target.value)}
      />
      <br />
      {props.value}
      <br />
    </div>
  );
};
