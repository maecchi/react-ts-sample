import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import {
  add,
  CounterActionPayload,
  decrement,
  increment,
} from 'actions/counter';
import Counter, { CounterProps } from 'components/Counter';
import { State } from 'reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: State): StateProps => ({
  count: state.count,
});

const mapDispatchProps = (
  dispatch: Dispatch<Action<CounterActionPayload>>, // 型引数のActionを書き換え
): DispatchProps =>
  bindActionCreators(
    {
      decrement,
      increment,
      add: (amount: number) => add({ amount }), // add()の呼び方を書き換え
    },
    dispatch,
  );

export default connect<StateProps, DispatchProps, CounterProps>(
  mapStateToProps,
  mapDispatchProps,
)(Counter);
