import * as Action from 'actions/counter';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State {
  count: number;
}

export const initialState: State = { count: 0 };

const appReducer = reducerWithInitialState(initialState)
  .case(Action.add, (state, payload) => ({
    ...state,
    count: state.count + payload.amount,
  }))
  .case(Action.decrement, state => ({
    ...state,
    count: state.count - 1,
  }))
  .case(Action.increment, state => ({
    ...state,
    count: state.count + 1,
  }));

export default appReducer;
