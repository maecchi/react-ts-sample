import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/sampleAction';

export interface State {
  // tslint:disable-next-line:react-unused-props-and-state
  value?: string;
}

const initialState: State = {
  value: '',
};

export const reducer = reducerWithInitialState(initialState).case(
  actions.updateValue,
  (state, value) => {
    return { ...state, value };
  },
);
