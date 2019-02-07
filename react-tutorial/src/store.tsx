import { combineReducers, createStore } from 'redux';
import { reducer, State } from './reducers/sampleReducers';

export interface AppState {
  state: State;
}

const store = createStore(
  combineReducers<AppState>({
    state: reducer,
  }),
);

export default store;
