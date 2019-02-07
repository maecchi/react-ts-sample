import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import AddTodo from '../components/AddTodo';
import { actionCreator } from '../modules';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(actionCreator.todos.addTodo({ text }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
