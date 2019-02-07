import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { actions } from '../actions/sampleAction';
import { Component } from '../components/sampleComponent';
import { AppState } from '../store';

export interface Actions {
  updateValue: (v: string) => Action<string>;
}

function mapStatetoProps(appState: AppState) {
  return { ...appState.state };
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v)),
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Component);
